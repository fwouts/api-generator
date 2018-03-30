import TextBuilder from "textbuilder";
import { Type } from "./defs";
import { DefinedTypes, KnownTypes } from "./resolver";

export type TypeScriptMatcher = (
  typeName: string,
) => TypeScriptPrimitiveType | TypeScriptImport | null;

export type TypeScriptPrimitiveType = "boolean" | "null" | "number" | "string";

export interface TypeScriptImport {
  // Path to follow, e.g. "abc/def" in `import { MyType } from `abc/def`.
  path: string;

  // What to import:
  // - `import MyType from 'abc/def'` for "default"
  // - `import { MyType } from 'abc/def'` for "MyType"
  what: "default" | string;
}

export const DEFAULT_TYPESCRIPT_MATCHER: TypeScriptMatcher = (typeName) => {
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
      return null;
  }
};

export function generateTypeScript(
  knownTypes: KnownTypes,
  definedTypes: DefinedTypes,
  matcher: TypeScriptMatcher,
) {
  const imports: string[] = [];
  const t = new TextBuilder();
  let firstType = true;
  for (const knownType of knownTypes) {
    const match = matcher(knownType);
    if (match === null) {
      throw new Error(`No match in TypeScript for type ${knownType}.`);
    } else if (typeof match === "string") {
      if (match !== knownType) {
        t.append(`export type ${knownType} = ${match};\n`);
        firstType = false;
      }
    } else {
      if (match.what === "default") {
        imports.push(`import ${knownType} from "${match.path}";`);
      } else {
        imports.push(`import { ${match.what} } from "${match.path}";`);
        if (match.what !== knownType) {
          t.append(`export type ${knownType} = ${match.what};\n`);
          firstType = false;
        }
      }
    }
  }
  for (const [name, type] of Object.entries(definedTypes)) {
    if (!firstType) {
      t.append("\n");
    }
    appendType(type, name);
    firstType = false;
  }
  return imports.join("\n") + (imports.length > 0 ? "\n\n" : "") + t.build();

  function appendType(type: Type, exported?: string) {
    if (typeof type === "string") {
      // TypeName.
      if (exported) {
        t.append(`export type ${exported} = `);
      }
      t.append(type);
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
          t.append(",\n");
        }
      });
      t.append("}");
      if (exported) {
        t.append("\n");
      }
    }
  }
}
