import { Api, Type } from "./defs";

export const PRIMARY_TYPES = new Set([
  "bool",
  "int",
  "float",
  "string",
  "null",
]);

export interface TypeDefinitions {
  [name: string]: Type;
}

export type ResolveResult =
  | {
      kind: "success";
      definedTypes: TypeDefinitions;
    }
  | {
      kind: "failure";
      errors: string[];
    };

export function resolve(api: Api): ResolveResult {
  const recordedErrors: string[] = [];
  const definedTypes: TypeDefinitions = {};
  for (const typeDef of api.typeDefs) {
    if (PRIMARY_TYPES.has(typeDef.name)) {
      recordedErrors.push(`Cannot redefine known type ${typeDef.name}.`);
      continue;
    }
    if (typeDef.name in definedTypes) {
      recordedErrors.push(`Type ${typeDef.name} is defined multiple times.`);
      continue;
    }
    definedTypes[typeDef.name] = typeDef.type;
  }
  for (const [name, type] of Object.entries(definedTypes)) {
    checkType(name, type, recordedErrors);
  }
  if (recordedErrors.length === 0) {
    return {
      kind: "success",
      definedTypes,
    };
  } else {
    return {
      kind: "failure",
      errors: recordedErrors,
    };
  }

  function checkType(name: string, type: Type, errors: string[]) {
    if (typeof type === "string") {
      // TypeName.
      if (!PRIMARY_TYPES.has(type) && !(type in definedTypes)) {
        errors.push(`Type ${name} refers to unknown type ${type}.`);
      }
    } else if (type instanceof Array) {
      // Union.
      for (const possibleType of type) {
        checkType(name, possibleType, errors);
      }
    } else {
      // Struct.
      for (const [fieldName, fieldType] of Object.entries(type)) {
        checkType(`${name}.${fieldName}`, fieldType, errors);
      }
    }
  }
}
