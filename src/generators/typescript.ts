import TextBuilder from "textbuilder";
import { Endpoint, PRIMITIVE_TYPES, PrimitiveType, Type } from "../defs";
import {
  EndpointDefinitions,
  endpointResponseName,
  TypeDefinitions,
} from "../resolver";
import { Directory } from "./io";

export interface GenerateOptions {
  client?: {
    baseUrl: string;
  };
  server?: {};
}

export function generateTypeScript(
  endpointDefinitions: EndpointDefinitions,
  typeDefinitions: TypeDefinitions,
  options: GenerateOptions = {},
): Directory {
  const directory: Directory = {
    kind: "directory",
    children: {},
  };
  if (options.client) {
    if (options.client.baseUrl.endsWith("/")) {
      throw new Error(`Base URL should not end with /.`);
    }
    const clientBuilder = new TextBuilder();
    clientBuilder.append('import axios, { AxiosError } from "axios";\n');
    clientBuilder.append('import * as api from "./api";\n');
    clientBuilder.append('import * as validation from "./validation";\n\n');
    clientBuilder.append(`const URL = \"${options.client.baseUrl}\";\n`);
    for (const endpoint of Object.values(endpointDefinitions)) {
      clientBuilder.append("\n");
      appendClientEndpoint(clientBuilder, endpoint);
      clientBuilder.append("\n");
    }
    directory.children["client.ts"] = {
      kind: "file",
      content: clientBuilder.build(),
    };
  }
  if (options.server) {
    const endpointsDirectory: Directory = {
      kind: "directory",
      children: {},
    };
    directory.children.endpoints = endpointsDirectory;
    const serverBuilder = new TextBuilder();
    serverBuilder.append('import express from "express";\n');
    serverBuilder.append('import * as api from "./api";\n');
    serverBuilder.append('import * as validation from "./validation";\n');
    for (const endpoint of Object.values(endpointDefinitions)) {
      serverBuilder.append(
        `import { ${endpoint.name} } from "./endpoints/${endpoint.name}";\n`,
      );
    }
    serverBuilder.append("\n");
    serverBuilder.append("const PORT = 3010;\n\n");
    serverBuilder.append("const app = express();\n\n");
    for (const endpoint of Object.values(endpointDefinitions)) {
      appendServerEndpoint(typeDefinitions, serverBuilder, endpoint);
      endpointsDirectory.children[endpoint.name + ".ts"] = {
        kind: "file",
        content: generateEndpointImplementation(typeDefinitions, endpoint),
        doNotOverride: true,
      };
      serverBuilder.append("\n\n");
    }
    serverBuilder.append("// tslint:disable-next-line no-console\n");
    serverBuilder.append(
      "app.listen(PORT, () => console.log(`Listening on port ${PORT}`));\n",
    );
    directory.children["server.ts"] = {
      kind: "file",
      content: serverBuilder.build(),
    };
  }
  let apiFirstBlock = true;
  const apiBuilder = new TextBuilder();
  for (const [name, type] of Object.entries(typeDefinitions)) {
    if (!apiFirstBlock) {
      apiBuilder.append("\n");
    }
    appendType(apiBuilder, type, name, true);
    apiFirstBlock = false;
  }
  directory.children["api.ts"] = {
    kind: "file",
    content: apiBuilder.build(),
  };
  const validationBuilder = new TextBuilder();
  for (const [name, type] of Object.entries(typeDefinitions)) {
    appendValidateMethods(validationBuilder, type, name);
  }
  for (const primitiveType of PRIMITIVE_TYPES) {
    appendValidateMethods(validationBuilder, primitiveType, primitiveType);
  }
  appendValidateMethods(validationBuilder, "void", "void");
  directory.children["validation.ts"] = {
    kind: "file",
    content: validationBuilder.build(),
  };
  return directory;
}

function appendClientEndpoint(clientBuilder: TextBuilder, endpoint: Endpoint) {
  const endpointArguments: string[] = [];
  if (endpoint.headers) {
    endpointArguments.push(`headers: api.${endpoint.headers}`);
  }
  for (const subpath of endpoint.route) {
    if (subpath.dynamic) {
      endpointArguments.push(`${subpath.name}: string`);
    }
  }
  if (endpoint.input !== "void") {
    endpointArguments.push(
      `request: ${externalOrPrimitive("api", endpoint.input)}`,
    );
  }
  clientBuilder.append(
    `export async function ${endpoint.name}(${endpointArguments.join(
      ", ",
    )}): Promise<api.${endpointResponseName(endpoint)}> {`,
  );
  clientBuilder.indented(() => {
    if (endpoint.headers) {
      clientBuilder.append(
        `if (!validation.validate_${endpoint.headers}(headers)) {`,
      );
      clientBuilder.indented(() => {
        clientBuilder.append(
          "throw new Error(`Invalid headers: ${JSON.stringify(headers, null, 2)}`);",
        );
      });
      clientBuilder.append("}\n");
    }
    if (endpoint.input !== "void") {
      clientBuilder.append(
        `if (!validation.validate_${endpoint.input}(request)) {`,
      );
      clientBuilder.indented(() => {
        clientBuilder.append(
          "throw new Error(`Invalid request: ${JSON.stringify(request, null, 2)}`);",
        );
      });
      clientBuilder.append("}\n");
    }
    clientBuilder.append(`const url = \`\${URL}`);
    for (const subpath of endpoint.route) {
      if (subpath.dynamic) {
        clientBuilder.append(`/\${${subpath.name}}`);
      } else {
        clientBuilder.append(`/${subpath.name}`);
      }
    }
    clientBuilder.append("`;\n");
    clientBuilder.append("let data: any;\n");
    clientBuilder.append("let statusCode: number;\n");
    clientBuilder.append("let statusText: string;\n");
    clientBuilder.append("try {");
    clientBuilder.indented(() => {
      clientBuilder.append("const response = await axios({");
      clientBuilder.indented(() => {
        clientBuilder.append("url,\n");
        clientBuilder.append(`method: "${endpoint.method}",\n`);
        clientBuilder.append('responseType: "json",\n');
        if (endpoint.input !== "void") {
          clientBuilder.append("data: request,\n");
        }
        if (endpoint.headers) {
          clientBuilder.append("headers,\n");
        }
      });
      clientBuilder.append("});\n");
      clientBuilder.append("data = response.data;\n");
      clientBuilder.append("statusCode = response.status;\n");
      clientBuilder.append("statusText = response.statusText;\n");
    });
    clientBuilder.append("} catch (e) {");
    clientBuilder.indented(() => {
      clientBuilder.append("const axiosError = e as AxiosError;\n");
      clientBuilder.append("if (axiosError.response) {");
      clientBuilder.indented(() => {
        clientBuilder.append("data = axiosError.response.data;\n");
        clientBuilder.append("statusCode = axiosError.response.status;\n");
        clientBuilder.append("statusText = axiosError.response.statusText;\n");
      });
      clientBuilder.append("} else {");
      clientBuilder.indented(() => {
        clientBuilder.append("statusCode = 503;\n");
        clientBuilder.append(
          "statusText = axiosError.code || axiosError.message;\n",
        );
      });
      clientBuilder.append("}");
    });
    clientBuilder.append("}\n");
    clientBuilder.append("switch (statusCode) {");
    clientBuilder.indented(() => {
      for (const endpointOutput of endpoint.outputs) {
        clientBuilder.append(`case ${endpointOutput.statusCode}:`);
        clientBuilder.indented(() => {
          clientBuilder.append(
            `if (!validation.validate_${endpointOutput.type}(data)) {`,
          );
          clientBuilder.indented(() => {
            clientBuilder.append(
              "throw new Error(`Invalid response: ${JSON.stringify(data, null, 2)}`);",
            );
          });
          clientBuilder.append("}\n");
          clientBuilder.append("break;");
        });
      }
      clientBuilder.append("default:");
      clientBuilder.indented(() => {
        clientBuilder.append(
          "throw new Error(`Unexpected status: ${statusCode} ${statusText}`);",
        );
      });
    });
    clientBuilder.append("}\n");
    clientBuilder.append("return data;");
  });
  clientBuilder.append("}");
}

function appendServerEndpoint(
  typeDefinitions: TypeDefinitions,
  serverBuilder: TextBuilder,
  endpoint: Endpoint,
) {
  const path = endpoint.route
    .map((subpath) => {
      if (subpath.dynamic) {
        return ":" + subpath.name;
      } else {
        return subpath.name;
      }
    })
    .join("/");
  serverBuilder.append(
    `app.${endpoint.method.toLowerCase()}("/${path}", async (req, res, next) => {`,
  );
  serverBuilder.indented(() => {
    serverBuilder.append("try {");
    serverBuilder.indented(() => {
      const args: string[] = [];
      if (endpoint.headers) {
        args.push("headers");
        serverBuilder.append(`const headers: api.${endpoint.headers} = {`);
        serverBuilder.indented(() => {
          const headersType = typeDefinitions[endpoint.headers!];
          if (
            typeof headersType === "string" ||
            headersType.kind !== "struct"
          ) {
            throw new Error(
              `Headers type ${endpoint.headers} must be a struct.`,
            );
          }
          for (const [fieldName, fieldType] of Object.entries(
            headersType.items,
          )) {
            if (fieldType === "string") {
              serverBuilder.append(
                `${fieldName}: req.header("${fieldName}")!,\n`,
              );
            } else if (
              typeof fieldType === "object" &&
              fieldType.kind === "optional" &&
              fieldType.type === "string"
            ) {
              serverBuilder.append(
                `${fieldName}: req.header("${fieldName}"),\n`,
              );
            } else {
              throw new Error(`Header ${fieldName} must be a string.`);
            }
          }
        });
        serverBuilder.append(`};\n`);
        serverBuilder.append(
          `if (!validation.validate_${endpoint.headers}(headers)) {`,
        );
        serverBuilder.indented(() => {
          serverBuilder.append(
            "throw new Error(`Invalid headers: ${JSON.stringify(headers, null, 2)}`);",
          );
        });
        serverBuilder.append("}\n");
      }
      for (const subpath of endpoint.route) {
        if (subpath.dynamic) {
          serverBuilder.append(
            `const ${subpath.name} = req.params["${subpath.name}"];\n`,
          );
          args.push(subpath.name);
        }
      }
      if (endpoint.input !== "void") {
        args.push("request");
        serverBuilder.append(
          `const request: ${externalOrPrimitive(
            "api",
            endpoint.input,
          )} = req.body;\n`,
        );
        serverBuilder.append(
          `if (!validation.validate_${endpoint.input}(request)) {`,
        );
        serverBuilder.indented(() => {
          serverBuilder.append(
            "throw new Error(`Invalid request: ${JSON.stringify(request, null, 2)}`);",
          );
        });
        serverBuilder.append("}\n");
      }
      serverBuilder.append(
        `const response: api.${endpointResponseName(endpoint)} = await ${
          endpoint.name
        }(${args.join(", ")});\n`,
      );
      serverBuilder.append("let statusCode: number;\n");
      serverBuilder.append("switch (response.kind) {");
      serverBuilder.indented(() => {
        for (const endpointOutput of endpoint.outputs) {
          serverBuilder.append(`case "${endpointOutput.name}":`);
          serverBuilder.indented(() => {
            if (endpointOutput.type !== "void") {
              serverBuilder.append(
                `if (!validation.validate_${
                  endpointOutput.type
                }(response.data)) {`,
              );
              serverBuilder.indented(() => {
                serverBuilder.append(
                  "throw new Error(`Invalid response: ${JSON.stringify(response, null, 2)}`);",
                );
              });
              serverBuilder.append("}\n");
            }
            serverBuilder.append(
              `statusCode = ${endpointOutput.statusCode};\n`,
            );
            serverBuilder.append("break;");
          });
        }
        serverBuilder.append("default:");
        serverBuilder.indented(() => {
          serverBuilder.append(
            "throw new Error(`Invalid response: ${JSON.stringify(response, null, 2)}`);",
          );
        });
      });
      serverBuilder.append("}\n");
      serverBuilder.append("res.status(statusCode).json(response);\n");
    });
    serverBuilder.append("} catch (err) {");
    serverBuilder.indented(() => {
      serverBuilder.append("next(err);");
    });
    serverBuilder.append("}");
  });
  serverBuilder.append("});");
}

function generateEndpointImplementation(
  typeDefinitions: TypeDefinitions,
  endpoint: Endpoint,
): string {
  const codeBuilder = new TextBuilder();
  const args: string[] = [];
  const importedTypes: string[] = [];
  if (endpoint.headers) {
    args.push(`headers: ${endpoint.headers}`);
    importedTypes.push(endpoint.headers);
  }
  for (const subpath of endpoint.route) {
    if (subpath.dynamic) {
      args.push(`${subpath.name}: string`);
    }
  }
  if (endpoint.input !== "void") {
    args.push(`request: ${endpoint.input}`);
    importedTypes.push(endpoint.input);
  }
  importedTypes.push(endpointResponseName(endpoint));
  if (importedTypes.length > 0) {
    codeBuilder.append(
      `import { ${importedTypes.join(", ")} } from "../api";\n\n`,
    );
  }
  codeBuilder.append(
    `export async function ${endpoint.name}(${args.join(
      ", ",
    )}): Promise<${endpointResponseName(endpoint)}> {`,
  );
  codeBuilder.indented(() => {
    codeBuilder.append(`throw new Error("Unimplemented.");`);
  });
  codeBuilder.append(`}\n`);
  return codeBuilder.build();
}

function appendType(
  apiBuilder: TextBuilder,
  type: Type,
  name: string,
  exported = false,
) {
  if (typeof type === "string") {
    // TypeName.
    if (exported) {
      apiBuilder.append(`export type ${name} = `);
    }
    if (PRIMITIVE_TYPES.has(type)) {
      apiBuilder.append(primitiveTypeToTypeScript(type as PrimitiveType));
    } else {
      apiBuilder.append(type);
    }
    if (exported) {
      apiBuilder.append(";\n");
    }
  } else if (type.kind === "array") {
    if (exported) {
      apiBuilder.append(`export type ${name} = `);
    }
    appendType(apiBuilder, type.items, `${name}_item`);
    apiBuilder.append("[]");
    if (exported) {
      apiBuilder.append(";\n");
    }
  } else if (type.kind === "union") {
    if (exported) {
      apiBuilder.append(`export type ${name} = `);
    }
    let i = 0;
    for (const possibleType of type.items) {
      if (i > 0) {
        apiBuilder.append(" | ");
      }
      appendType(apiBuilder, possibleType, `${name}_${i}`);
      i++;
    }
    if (exported) {
      apiBuilder.append(";\n");
    }
  } else if (type.kind === "struct") {
    if (exported) {
      apiBuilder.append(`export interface ${name} `);
    }
    apiBuilder.append("{");
    apiBuilder.indented(() => {
      for (const [fieldName, fieldType] of Object.entries(type.items)) {
        if (typeof fieldType !== "string" && fieldType.kind === "optional") {
          apiBuilder.append(fieldName, "?: ");
          appendType(apiBuilder, fieldType.type, `${name}_${fieldName}`);
        } else {
          apiBuilder.append(fieldName, ": ");
          appendType(apiBuilder, fieldType, `${name}_${fieldName}`);
        }
        apiBuilder.append(";\n");
      }
    });
    apiBuilder.append("}");
    if (exported) {
      apiBuilder.append("\n");
    }
  } else if (type.kind === "symbol") {
    if (exported) {
      apiBuilder.append(`export type ${name} = `);
    }
    apiBuilder.append(`'${type.value}'`);
    if (exported) {
      apiBuilder.append(";\n");
    }
  } else {
    throw new Error();
  }
}

function appendValidateMethods(
  validationBuilder: TextBuilder,
  type: Type,
  name: string,
) {
  if (typeof type === "string") {
    // TypeName.
    if (type === "void" || PRIMITIVE_TYPES.has(type)) {
      appendValidateMethod(validationBuilder, name, () => {
        if (type === "void") {
          validationBuilder.append("return value === undefined;");
        } else if (type === "bool") {
          validationBuilder.append("return typeof value === 'boolean';");
        } else if (type === "int" || type === "long") {
          validationBuilder.append(
            "return typeof value === 'number' && Number.isInteger(value);",
          );
        } else if (type === "float" || type === "double") {
          validationBuilder.append("return typeof value === 'number';");
        } else if (type === "string") {
          validationBuilder.append("return typeof value === 'string';");
        } else if (type === "null") {
          validationBuilder.append("return value === null;");
        } else {
          throw new Error(`Unknown primary type: ${type}.`);
        }
      });
    } else {
      appendValidateMethod(validationBuilder, name, () => {
        validationBuilder.append(`return validate_${type}(value);`);
      });
    }
  } else if (type.kind === "array") {
    appendValidateMethod(validationBuilder, name, () => {
      validationBuilder.append("if (!(value instanceof Array)) {");
      validationBuilder.indented(() =>
        validationBuilder.append("return false;"),
      );
      validationBuilder.append("}\n");
      validationBuilder.append("for (let item of value) {");
      validationBuilder.indented(() => {
        validationBuilder.append(`if (!validate_${name}_item(item)) {`);
        validationBuilder.indented(() =>
          validationBuilder.append("return false;"),
        );
        validationBuilder.append("}\n");
      });
      validationBuilder.append("}\n");
      validationBuilder.append("return true;\n");
    });
    appendValidateMethods(validationBuilder, type.items, `${name}_item`);
  } else if (type.kind === "union") {
    appendValidateMethod(validationBuilder, name, () => {
      for (let i = 0; i < type.items.length; i++) {
        validationBuilder.append(`if (validate_${name}_${i}(value)) {`);
        validationBuilder.indented(() =>
          validationBuilder.append("return true;"),
        );
        validationBuilder.append("}\n");
      }
      validationBuilder.append("return false;");
    });
    for (let i = 0; i < type.items.length; i++) {
      appendValidateMethods(validationBuilder, type.items[i], `${name}_${i}`);
    }
  } else if (type.kind === "struct") {
    appendValidateMethod(validationBuilder, name, () => {
      validationBuilder.append("if (!(value instanceof Object)) {");
      validationBuilder.indented(() =>
        validationBuilder.append("return false;"),
      );
      validationBuilder.append("}\n");
      for (const fieldName of Object.keys(type.items)) {
        validationBuilder.append(
          `if (!validate_${name}_${fieldName}(value.${fieldName})) {`,
        );
        validationBuilder.indented(() =>
          validationBuilder.append("return false;"),
        );
        validationBuilder.append("}\n");
      }
      validationBuilder.append("return true;\n");
    });
    for (const [fieldName, fieldType] of Object.entries(type.items)) {
      appendValidateMethods(
        validationBuilder,
        fieldType,
        `${name}_${fieldName}`,
      );
    }
  } else if (type.kind === "symbol") {
    appendValidateMethod(validationBuilder, name, () => {
      validationBuilder.append(`return value === '${type.value}';`);
    });
  } else if (type.kind === "optional") {
    appendValidateMethod(validationBuilder, name, () => {
      validationBuilder.append(
        `return value === undefined || validate_${name}_present(value);`,
      );
    });
    appendValidateMethods(validationBuilder, type.type, `${name}_present`);
  } else {
    throw new Error();
  }
}

function appendValidateMethod(
  validationBuilder: TextBuilder,
  name: string,
  body: () => void,
) {
  validationBuilder.append(
    `export function validate_${name}(value: any): boolean {`,
  );
  validationBuilder.indented(body);
  validationBuilder.append("}\n\n");
}

function externalOrPrimitive(externalNamespace: string, typeName: string) {
  if (PRIMITIVE_TYPES.has(typeName)) {
    return primitiveTypeToTypeScript(typeName as PrimitiveType);
  } else {
    return `${externalNamespace}.${typeName}`;
  }
}

function primitiveTypeToTypeScript(typeName: PrimitiveType) {
  if (typeName === "bool") {
    return "boolean";
  } else if (typeName === "int") {
    return "number";
  } else if (typeName === "long") {
    return "number";
  } else if (typeName === "float") {
    return "number";
  } else if (typeName === "double") {
    return "number";
  } else if (typeName === "string") {
    return "string";
  } else if (typeName === "null") {
    return "null";
  } else {
    throw new Error(`Unknown primary type: ${typeName}.`);
  }
}
