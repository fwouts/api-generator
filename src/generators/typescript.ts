import TextBuilder from "textbuilder";
import { Endpoint, Type } from "../defs";
import {
  EndpointDefinitions,
  PRIMARY_TYPES,
  TypeDefinitions,
} from "../resolver";

export interface GenerateOptions {
  endpoints?:
    | {
        kind: "client";
        baseUrl: string;
      }
    | {
        kind: "server";
      };
}

export function generateTypeScript(
  endpointDefinitions: EndpointDefinitions,
  typeDefinitions: TypeDefinitions,
  options: GenerateOptions = {},
) {
  const t = new TextBuilder();
  let firstBlock = true;
  if (options.endpoints && options.endpoints.kind === "client") {
    if (options.endpoints.baseUrl.endsWith("/")) {
      throw new Error(`Base URL should not end with /.`);
    }
    t.append('import axios from "axios";\n\n');
    t.append(`const URL = \"${options.endpoints.baseUrl}\";\n\n`);
    for (const endpoint of Object.values(endpointDefinitions)) {
      appendClientEndpoint(endpoint);
      t.append("\n\n");
    }
  }
  if (options.endpoints && options.endpoints.kind === "server") {
    t.append('import express from "express";\n');
    for (const endpoint of Object.values(endpointDefinitions)) {
      t.append(
        `import { ${endpoint.name} } from './endpoints/${endpoint.name}';\n`,
      );
    }
    t.append("\n");
    t.append("const PORT = 3010;\n\n");
    t.append("const app = express();\n\n");
    for (const endpoint of Object.values(endpointDefinitions)) {
      appendServerEndpoint(endpoint);
      t.append("\n\n");
    }
    t.append(
      "app.listen(PORT, () => console.log(`Listening on port ${PORT}`));\n\n",
    );
  }
  for (const [name, type] of Object.entries(typeDefinitions)) {
    if (!firstBlock) {
      t.append("\n");
    }
    appendType(type, name);
    firstBlock = false;
  }
  return t.build();

  function appendClientEndpoint(endpoint: Endpoint) {
    const endpointArguments: string[] = [];
    for (const subpath of endpoint.route) {
      if (subpath.dynamic) {
        endpointArguments.push(`${subpath.name}: string`);
      }
    }
    if (endpoint.input !== "void") {
      endpointArguments.push(`request: ${endpoint.input}`);
    }
    t.append(
      `export async function ${endpoint.name}(${endpointArguments.join(
        ", ",
      )}): Promise<${endpoint.output}> {`,
    );
    t.indented(() => {
      t.append(`let url = \`\${URL}`);
      for (const subpath of endpoint.route) {
        if (subpath.dynamic) {
          t.append(`/\${${subpath.name}}`);
        } else {
          t.append(`/${subpath.name}`);
        }
      }
      t.append("`;\n");
      if (endpoint.output !== "void") {
        t.append("const response = ");
      }
      t.append("await axios.get(url");
      if (endpoint.input !== "void") {
        t.append(", {");
        t.indented(() => {
          t.append("data: request,");
        });
        t.append("}");
      }
      t.append(");\n");
      if (endpoint.output !== "void") {
        t.append("return response.data;\n");
      }
    });
    t.append("}");
  }

  function appendServerEndpoint(endpoint: Endpoint) {
    const path = endpoint.route
      .map(subpath => {
        if (subpath.dynamic) {
          return ":" + subpath.name;
        } else {
          return subpath.name;
        }
      })
      .join("/");
    t.append(
      `app.${endpoint.method.toLowerCase()}("/${path}", async (req, res, next) => {`,
    );
    t.indented(() => {
      t.append("try {");
      t.indented(() => {
        // TODO: Double check input structure.
        const args: string[] = [];
        for (const subpath of endpoint.route) {
          if (subpath.dynamic) {
            t.append(
              `const ${subpath.name} = req.params["${subpath.name}"];\n`,
            );
            args.push(subpath.name);
          }
        }
        if (endpoint.input !== "void") {
          args.push("request");
          t.append(`const request: ${endpoint.input} = req.body;\n`);
        }
        if (endpoint.output !== "void") {
          t.append(`const response: ${endpoint.output} = `);
        }
        t.append(`await ${endpoint.name}(${args.join(", ")});\n`);
        if (endpoint.output !== "void") {
          t.append(`res.json(response);\n`);
        } else {
          t.append("res.end();\n");
        }
      });
      t.append("} catch (err) {");
      t.indented(() => {
        t.append("next(err);");
      });
      t.append("}");
    });
    t.append("});");
  }

  function appendType(type: Type, exported?: string) {
    if (typeof type === "string") {
      // TypeName.
      if (exported) {
        t.append(`export type ${exported} = `);
      }
      if (PRIMARY_TYPES.has(type)) {
        t.append(primaryTypeToTypeScript(type));
      } else {
        t.append(type);
      }
      if (exported) {
        t.append(";\n");
      }
    } else if (type.kind === "array") {
      if (exported) {
        t.append(`export type ${exported} = `);
      }
      appendType(type.items);
      t.append("[]");
      if (exported) {
        t.append(";\n");
      }
    } else if (type.kind === "union") {
      if (exported) {
        t.append(`export type ${exported} = `);
      }
      let first = true;
      for (const possibleType of type.items) {
        if (!first) {
          t.append(" | ");
        }
        appendType(possibleType);
        first = false;
      }
      if (exported) {
        t.append(";\n");
      }
    } else if (type.kind === "struct") {
      if (exported) {
        t.append(`export interface ${exported} `);
      }
      t.append("{");
      t.indented(() => {
        for (const [fieldName, fieldType] of Object.entries(type.items)) {
          if (typeof fieldType !== "string" && fieldType.kind === "optional") {
            t.append(fieldName, "?: ");
            appendType(fieldType.type);
          } else {
            t.append(fieldName, ": ");
            appendType(fieldType);
          }
          t.append(";\n");
        }
      });
      t.append("}");
      if (exported) {
        t.append("\n");
      }
    } else if (type.kind === "symbol") {
      if (exported) {
        t.append(`export type ${exported} = `);
      }
      t.append(`'${type.value}'`);
      if (exported) {
        t.append(";\n");
      }
    } else {
      throw new Error();
    }
  }
}

function primaryTypeToTypeScript(typeName: string) {
  switch (typeName) {
    case "bool":
      return "boolean";
    case "int":
      return "number";
    case "float":
      return "number";
    case "string":
      return "string";
    case "null":
      return "null";
    default:
      throw new Error(`Unknown primary type: ${typeName}.`);
  }
}
