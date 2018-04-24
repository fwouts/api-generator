import TextBuilder from "textbuilder";
import { Endpoint, PRIMITIVE_TYPES, PrimitiveType, Type } from "../defs";
import {
  EndpointDefinitions,
  endpointResponseName,
  TypeDefinitions,
} from "../resolver";
import { Directory, OverridableFile } from "./io";

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
    const clientFile: OverridableFile = {
      kind: "overridable-file",
      markerFormat: "// %marker%",
      template: `import axios, { AxiosError } from "axios";
import * as types from "./api/types";
import * as validators from "./api/validators";

const URL = "${options.client.baseUrl}";

%endpoints%
`,
      content: {
        endpoints: "",
      },
    };
    const clientEndpointsBuilder = new TextBuilder();
    let endpointFirstBlock = true;
    for (const endpoint of Object.values(endpointDefinitions)) {
      if (!endpointFirstBlock) {
        clientEndpointsBuilder.append("\n\n");
      }
      appendClientEndpoint(clientEndpointsBuilder, endpoint);
      endpointFirstBlock = false;
    }
    clientFile.content.endpoints = clientEndpointsBuilder.build();
    directory.children["client.ts"] = clientFile;
  }
  if (options.server) {
    directory.children.endpoints = {
      kind: "directory",
      children: {},
    };
    const serverFile: OverridableFile = {
      kind: "overridable-file",
      markerFormat: "// %marker%",
      template: `import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import * as types from "./api/types";
import * as validators from "./api/validators";

%endpointImports%

const PORT = 3010;

const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: (origin, callback) => {
      callback(null, true);
      // If you want to only allow some origins, use the following instead:
      // callback(new Error(\`Access is not allowed from \${origin}.\`));
    },
  }),
);

%httpHooks%

// tslint:disable-next-line no-console
app.listen(PORT, () => console.log(\`Listening on port \${PORT}\`));
`,
      content: {
        endpointImports: Object.values(endpointDefinitions)
          .map(
            (endpoint) =>
              `import { ${endpoint.name} } from "./endpoints/${
                endpoint.name
              }";`,
          )
          .join("\n"),
        httpHooks: "",
      },
    };
    const httpHooksBuilder = new TextBuilder();
    let endpointFirstBlock = true;
    for (const endpoint of Object.values(endpointDefinitions)) {
      if (!endpointFirstBlock) {
        httpHooksBuilder.append("\n\n");
      }
      appendServerEndpoint(typeDefinitions, httpHooksBuilder, endpoint);
      endpointFirstBlock = false;

      directory.children.endpoints.children[endpoint.name + ".ts"] = {
        kind: "file",
        content: generateEndpointImplementation(typeDefinitions, endpoint),
        doNotOverride: true,
      };
    }
    serverFile.content.httpHooks = httpHooksBuilder.build();
    directory.children["server.ts"] = serverFile;
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
  directory.children.api = {
    kind: "directory",
    children: {},
  };
  directory.children.api.children["types.ts"] = {
    kind: "file",
    content: apiBuilder.build(),
  };
  const validatorsBuilder = new TextBuilder();
  validatorsBuilder.append('import * as types from "./types";');
  for (const [name, type] of Object.entries(typeDefinitions)) {
    appendValidateMethods(validatorsBuilder, type, name, true);
  }
  for (const primitiveType of PRIMITIVE_TYPES) {
    appendValidateMethods(
      validatorsBuilder,
      primitiveType,
      primitiveType,
      true,
    );
  }
  directory.children.api.children["validators.ts"] = {
    kind: "file",
    content: validatorsBuilder.build(),
  };
  return directory;
}

function appendClientEndpoint(clientBuilder: TextBuilder, endpoint: Endpoint) {
  const endpointArguments: string[] = [];
  if (endpoint.headers) {
    endpointArguments.push(`headers: types.${endpoint.headers}`);
  }
  for (const subpath of endpoint.route) {
    if (subpath.dynamic) {
      endpointArguments.push(`${subpath.name}: string`);
    }
  }
  if (endpoint.input !== "void") {
    endpointArguments.push(
      `request: ${externalOrPrimitive("types", endpoint.input)}`,
    );
  }
  clientBuilder.append(
    `export async function ${endpoint.name}(${endpointArguments.join(
      ", ",
    )}): Promise<types.${endpointResponseName(endpoint)}> {`,
  );
  clientBuilder.indented(() => {
    if (endpoint.headers) {
      clientBuilder.append(
        `if (!validators.validate_${endpoint.headers}(headers)) {`,
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
        `if (!validators.validate_${endpoint.input}(request)) {`,
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
          if (endpointOutput.type === "void") {
            clientBuilder.append("return {");
            clientBuilder.indented(() => {
              clientBuilder.append(`kind: "${endpointOutput.name}",`);
            });
            clientBuilder.append("};");
          } else {
            clientBuilder.append(
              `if (!validators.validate_${endpointOutput.type}(data)) {`,
            );
            clientBuilder.indented(() => {
              clientBuilder.append(
                "throw new Error(`Invalid response: ${JSON.stringify(data, null, 2)}`);",
              );
            });
            clientBuilder.append("}\n");
            clientBuilder.append("return {");
            clientBuilder.indented(() => {
              clientBuilder.append(`kind: "${endpointOutput.name}",\n`);
              clientBuilder.append(`data,\n`);
            });
            clientBuilder.append("};");
          }
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
        serverBuilder.append(`const headers: types.${endpoint.headers} = {`);
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
                `${fieldName}: req.header("${fieldName}") || "",\n`,
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
          `if (!validators.validate_${endpoint.headers}(headers)) {`,
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
            "types",
            endpoint.input,
          )} = req.body;\n`,
        );
        serverBuilder.append(
          `if (!validators.validate_${endpoint.input}(request)) {`,
        );
        serverBuilder.indented(() => {
          serverBuilder.append(
            "throw new Error(`Invalid request: ${JSON.stringify(request, null, 2)}`);",
          );
        });
        serverBuilder.append("}\n");
      }
      serverBuilder.append(
        `const response: types.${endpointResponseName(endpoint)} = await ${
          endpoint.name
        }(${args.join(", ")});\n`,
      );
      serverBuilder.append("switch (response.kind) {");
      serverBuilder.indented(() => {
        for (const endpointOutput of endpoint.outputs) {
          serverBuilder.append(`case "${endpointOutput.name}":`);
          serverBuilder.indented(() => {
            if (endpointOutput.type !== "void") {
              serverBuilder.append(
                `if (!validators.validate_${
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
            serverBuilder.append(`res.status(${endpointOutput.statusCode});\n`);
            if (endpointOutput.type === "void") {
              serverBuilder.append("res.end();\n");
            } else {
              serverBuilder.append("res.json(response.data);\n");
            }
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
      `import { ${importedTypes.join(", ")} } from "../api/types";\n\n`,
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
  } else if (type.kind === "map") {
    if (exported) {
      apiBuilder.append(`export type ${name} = `);
    }
    apiBuilder.append("{ [key: string]: ");
    appendType(apiBuilder, type.items, `${name}_item`);
    apiBuilder.append(" }");
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
  validatorsBuilder: TextBuilder,
  type: Type,
  name: string,
  declaredType: boolean,
) {
  if (typeof type === "string") {
    // TypeName.
    if (type === "void" || PRIMITIVE_TYPES.has(type)) {
      appendValidateMethod(validatorsBuilder, name, declaredType, () => {
        if (type === "void") {
          validatorsBuilder.append("return value === undefined;");
        } else if (type === "bool") {
          validatorsBuilder.append("return typeof value === 'boolean';");
        } else if (type === "int" || type === "long") {
          validatorsBuilder.append(
            "return typeof value === 'number' && Number.isInteger(value);",
          );
        } else if (type === "float" || type === "double") {
          validatorsBuilder.append("return typeof value === 'number';");
        } else if (type === "string") {
          validatorsBuilder.append("return typeof value === 'string';");
        } else if (type === "null") {
          validatorsBuilder.append("return value === null;");
        } else {
          throw new Error(`Unknown primary type: ${type}.`);
        }
      });
    } else {
      appendValidateMethod(validatorsBuilder, name, declaredType, () => {
        validatorsBuilder.append(`return validate_${type}(value);`);
      });
    }
  } else if (type.kind === "array") {
    appendValidateMethod(validatorsBuilder, name, declaredType, () => {
      validatorsBuilder.append("if (!Array.isArray(value)) {");
      validatorsBuilder.indented(() =>
        validatorsBuilder.append("return false;"),
      );
      validatorsBuilder.append("}\n");
      validatorsBuilder.append("for (let item of value) {");
      validatorsBuilder.indented(() => {
        validatorsBuilder.append(`if (!validate_${name}_item(item)) {`);
        validatorsBuilder.indented(() =>
          validatorsBuilder.append("return false;"),
        );
        validatorsBuilder.append("}\n");
      });
      validatorsBuilder.append("}\n");
      validatorsBuilder.append("return true;\n");
    });
    appendValidateMethods(validatorsBuilder, type.items, `${name}_item`, false);
  } else if (type.kind === "map") {
    appendValidateMethod(validatorsBuilder, name, declaredType, () => {
      validatorsBuilder.append(
        "if (value === null || typeof value !== 'object' || Array.isArray(value)) {",
      );
      validatorsBuilder.indented(() =>
        validatorsBuilder.append("return false;"),
      );
      validatorsBuilder.append("}\n");
      validatorsBuilder.append("for (let key of Object.keys(value)) {");
      validatorsBuilder.indented(() => {
        validatorsBuilder.append(`if (!validate_string(key)) {`);
        validatorsBuilder.indented(() =>
          validatorsBuilder.append("return false;"),
        );
        validatorsBuilder.append("}\n");
        validatorsBuilder.append(`if (!validate_${name}_item(value[key])) {`);
        validatorsBuilder.indented(() =>
          validatorsBuilder.append("return false;"),
        );
        validatorsBuilder.append("}\n");
      });
      validatorsBuilder.append("}\n");
      validatorsBuilder.append("return true;\n");
    });
    appendValidateMethods(validatorsBuilder, type.items, `${name}_item`, false);
  } else if (type.kind === "union") {
    appendValidateMethod(validatorsBuilder, name, declaredType, () => {
      for (let i = 0; i < type.items.length; i++) {
        validatorsBuilder.append(`if (validate_${name}_${i}(value)) {`);
        validatorsBuilder.indented(() =>
          validatorsBuilder.append("return true;"),
        );
        validatorsBuilder.append("}\n");
      }
      validatorsBuilder.append("return false;");
    });
    for (let i = 0; i < type.items.length; i++) {
      appendValidateMethods(
        validatorsBuilder,
        type.items[i],
        `${name}_${i}`,
        false,
      );
    }
  } else if (type.kind === "struct") {
    appendValidateMethod(validatorsBuilder, name, declaredType, () => {
      validatorsBuilder.append(
        "if (typeof value !== 'object' || value === null) {",
      );
      validatorsBuilder.indented(() =>
        validatorsBuilder.append("return false;"),
      );
      validatorsBuilder.append("}\n");
      for (const fieldName of Object.keys(type.items)) {
        validatorsBuilder.append(
          `if (!validate_${name}_${fieldName}(value.${fieldName})) {`,
        );
        validatorsBuilder.indented(() =>
          validatorsBuilder.append("return false;"),
        );
        validatorsBuilder.append("}\n");
      }
      validatorsBuilder.append("return true;\n");
    });
    for (const [fieldName, fieldType] of Object.entries(type.items)) {
      appendValidateMethods(
        validatorsBuilder,
        fieldType,
        `${name}_${fieldName}`,
        false,
      );
    }
  } else if (type.kind === "symbol") {
    appendValidateMethod(validatorsBuilder, name, declaredType, () => {
      validatorsBuilder.append(`return value === '${type.value}';`);
    });
  } else if (type.kind === "optional") {
    appendValidateMethod(validatorsBuilder, name, declaredType, () => {
      validatorsBuilder.append(
        `return value === undefined || validate_${name}_present(value);`,
      );
    });
    appendValidateMethods(
      validatorsBuilder,
      type.type,
      `${name}_present`,
      false,
    );
  } else {
    throw new Error();
  }
}

function appendValidateMethod(
  validatorsBuilder: TextBuilder,
  name: string,
  declaredType: boolean,
  body: () => void,
) {
  const returnType = declaredType
    ? `value is ${externalOrPrimitive("types", name)}`
    : "boolean";
  validatorsBuilder.append(
    `\n\nexport function validate_${name}(value: any): ${returnType} {`,
  );
  validatorsBuilder.indented(body);
  validatorsBuilder.append("}");
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
