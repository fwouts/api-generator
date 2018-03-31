import TextBuilder from "textbuilder";
import { Type } from "../defs";
import { PRIMARY_TYPES, TypeDefinitions } from "../resolver";

export function generateTypeScript(typeDefinitions: TypeDefinitions) {
  const t = new TextBuilder();
  let firstType = true;
  for (const [name, type] of Object.entries(typeDefinitions)) {
    if (!firstType) {
      t.append("\n");
    }
    appendType(type, name);
    firstType = false;
  }
  return t.build();

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
      // Union.
      if (exported) {
        t.append(`export type ${exported} = `);
      }
      let first = true;
      for (const possibleType of type) {
        if (!first) {
          t.append(" | ");
        }
        appendType(possibleType);
        first = false;
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
