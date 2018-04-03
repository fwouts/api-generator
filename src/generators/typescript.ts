import TextBuilder from "textbuilder";
import { Endpoint, PRIMITIVE_TYPES, PrimitiveType, Type } from "../defs";
import { EndpointDefinitions, TypeDefinitions } from "../resolver";
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
    clientBuilder.append('import axios from "axios";\n');
    clientBuilder.append('import * as api from "./api";\n\n');
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
  let firstBlock = true;
  const apiBuilder = new TextBuilder();
  for (const [name, type] of Object.entries(typeDefinitions)) {
    if (!firstBlock) {
      apiBuilder.append("\n");
    }
    appendType(apiBuilder, type, name);
    firstBlock = false;
  }
  directory.children["api.ts"] = {
    kind: "file",
    content: apiBuilder.build(),
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
    endpointArguments.push(`request: api.${endpoint.input}`);
  }
  clientBuilder.append(
    `export async function ${endpoint.name}(${endpointArguments.join(
      ", ",
    )}): Promise<${
      endpoint.output === "void" ? "void" : `api.${endpoint.output}`
    }> {`,
  );
  clientBuilder.indented(() => {
    clientBuilder.append(`const url = \`\${URL}`);
    for (const subpath of endpoint.route) {
      if (subpath.dynamic) {
        clientBuilder.append(`/\${${subpath.name}}`);
      } else {
        clientBuilder.append(`/${subpath.name}`);
      }
    }
    clientBuilder.append("`;\n");
    if (endpoint.output !== "void") {
      clientBuilder.append("const response = ");
    }
    clientBuilder.append(`await axios({`);
    clientBuilder.indented(() => {
      clientBuilder.append("url,\n");
      clientBuilder.append(`method: "${endpoint.method}",\n`);
      if (endpoint.input !== "void") {
        clientBuilder.append("data: request,\n");
      }
      if (endpoint.headers) {
        clientBuilder.append("headers,\n");
      }
    });
    clientBuilder.append("});\n");
    if (endpoint.output !== "void") {
      clientBuilder.append("return response.data;\n");
    }
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
              // TODO: Fail if the header is not set or empty.
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
      }
      for (const subpath of endpoint.route) {
        if (subpath.dynamic) {
          serverBuilder.append(
            `const ${subpath.name} = req.params["${subpath.name}"];\n`,
          );
          args.push(subpath.name);
        }
      }
      // TODO: Double check input structure.
      if (endpoint.input !== "void") {
        args.push("request");
        serverBuilder.append(
          `const request: api.${endpoint.input} = req.body;\n`,
        );
      }
      if (endpoint.output !== "void") {
        serverBuilder.append(`const response: api.${endpoint.output} = `);
      }
      serverBuilder.append(`await ${endpoint.name}(${args.join(", ")});\n`);
      if (endpoint.output !== "void") {
        serverBuilder.append(`res.json(response);\n`);
      } else {
        serverBuilder.append("res.end();\n");
      }
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
  if (endpoint.output !== "void") {
    importedTypes.push(endpoint.output);
  }
  if (importedTypes.length > 0) {
    codeBuilder.append(
      `import { ${importedTypes.join(", ")} } from "../api";\n\n`,
    );
  }
  codeBuilder.append(
    `export async function ${endpoint.name}(${args.join(", ")}): Promise<${
      endpoint.output
    }> {`,
  );
  codeBuilder.indented(() => {
    codeBuilder.append(`throw new Error("Unimplemented.");`);
  });
  codeBuilder.append(`}\n`);
  return codeBuilder.build();
}

function appendType(apiBuilder: TextBuilder, type: Type, exported?: string) {
  if (typeof type === "string") {
    // TypeName.
    if (exported) {
      apiBuilder.append(`export type ${exported} = `);
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
      apiBuilder.append(`export type ${exported} = `);
    }
    appendType(apiBuilder, type.items);
    apiBuilder.append("[]");
    if (exported) {
      apiBuilder.append(";\n");
    }
  } else if (type.kind === "union") {
    if (exported) {
      apiBuilder.append(`export type ${exported} = `);
    }
    let first = true;
    for (const possibleType of type.items) {
      if (!first) {
        apiBuilder.append(" | ");
      }
      appendType(apiBuilder, possibleType);
      first = false;
    }
    if (exported) {
      apiBuilder.append(";\n");
    }
  } else if (type.kind === "struct") {
    if (exported) {
      apiBuilder.append(`export interface ${exported} `);
    }
    apiBuilder.append("{");
    apiBuilder.indented(() => {
      for (const [fieldName, fieldType] of Object.entries(type.items)) {
        if (typeof fieldType !== "string" && fieldType.kind === "optional") {
          apiBuilder.append(fieldName, "?: ");
          appendType(apiBuilder, fieldType.type);
        } else {
          apiBuilder.append(fieldName, ": ");
          appendType(apiBuilder, fieldType);
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
      apiBuilder.append(`export type ${exported} = `);
    }
    apiBuilder.append(`'${type.value}'`);
    if (exported) {
      apiBuilder.append(";\n");
    }
  } else {
    throw new Error();
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
