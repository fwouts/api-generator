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
    for (const endpoint of Object.values(endpointDefinitions)) {
      appendClientEndpoint(options.endpoints.baseUrl, endpoint);
      t.append("\n\n");
    }
  }
  if (options.endpoints && options.endpoints.kind === "server") {
    t.append('import express from "express";\n\n');
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

  function appendClientEndpoint(baseUrl: string, endpoint: Endpoint) {
    const endpointArguments: string[] = [];
    for (const subpath of endpoint.route) {
      if (subpath.dynamic) {
        endpointArguments.push(`${subpath.name}: string`);
      }
    }
    endpointArguments.push(`request: ${endpoint.input}`);
    t.append(
      `export async function ${endpoint.name}(${endpointArguments.join(
        ", ",
      )}): Promise<${endpoint.output}> {`,
    );
    t.indented(() => {
      t.append(`let url = \`${baseUrl}`);
      for (const subpath of endpoint.route) {
        if (subpath.dynamic) {
          t.append(`/\${${subpath.name}}`);
        } else {
          t.append(`/${subpath.name}`);
        }
      }
      t.append("`;\n");
      t.append("const response = await axios.get(url, {");
      t.indented(() => {
        t.append("data: request,");
      });
      t.append("});\n");
      t.append("return response.data;\n");
    });
    t.append("}");
  }

  function appendServerEndpoint(endpoint: Endpoint) {
    const path = endpoint.route
      .map((subpath) => {
        if (subpath.dynamic) {
          return ":" + subpath.name;
        } else {
          return subpath.name;
        }
      })
      .join("/");
    t.append(
      `app.${endpoint.method.toLowerCase()}("/${path}", (req, res) => {`,
    );
    t.indented(() => {
      // TODO: Double check input structure.
      for (const subpath of endpoint.route) {
        if (subpath.dynamic) {
          t.append(`const ${subpath.name} = req.params["${subpath.name}"];\n`);
        }
      }
      t.append(`const request: ${endpoint.input} = req.body;\n`);
      t.append(`let response: ${endpoint.output};\n`);
      t.append("// TODO: Implement.\n");
      t.append(`res.json(response);\n`);
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
    } else if (type instanceof Array) {
      // Union (2+ items) or Array (1 item).
      if (exported) {
        t.append(`export type ${exported} = `);
      }
      if (type.length === 1) {
        appendType(type[0]);
        t.append("[]");
      } else {
        let first = true;
        for (const possibleType of type) {
          if (!first) {
            t.append(" | ");
          }
          appendType(possibleType);
          first = false;
        }
      }
      if (exported) {
        t.append(";\n");
      }
    } else {
      // Struct.
      if (exported) {
        t.append(`export interface ${exported} `);
      }
      t.append("{");
      t.indented(() => {
        for (const [fieldName, fieldType] of Object.entries(type)) {
          t.append(fieldName, ": ");
          appendType(fieldType);
          t.append(";\n");
        }
      });
      t.append("}");
      if (exported) {
        t.append("\n");
      }
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
