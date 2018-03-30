import { Api, Type } from "./defs";

export type KnownTypes = string[];

export interface DefinedTypes {
  [name: string]: Type;
}

export type ResolveResult =
  | {
      kind: "success";
      knownTypes: KnownTypes;
      definedTypes: DefinedTypes;
    }
  | {
      kind: "failure";
      errors: string[];
    };

export function resolve(api: Api, knownTypes: KnownTypes): ResolveResult {
  const knownTypesSet = new Set(knownTypes);
  const recordedErrors: string[] = [];
  const definedTypes: DefinedTypes = {};
  for (const typeDef of api.typeDefs) {
    if (knownTypesSet.has(typeDef.name)) {
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
      knownTypes,
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
      if (!knownTypesSet.has(type) && !(type in definedTypes)) {
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
