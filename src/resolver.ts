import { Api, Endpoint, Type } from "./defs";

export const PRIMARY_TYPES = new Set([
  "bool",
  "int",
  "float",
  "string",
  "null",
]);

export interface EndpointDefinitions {
  [name: string]: Endpoint;
}

export interface TypeDefinitions {
  [name: string]: Type;
}

export type ResolveResult =
  | {
      kind: "success";
      definedEndpoints: EndpointDefinitions;
      definedTypes: TypeDefinitions;
    }
  | {
      kind: "failure";
      errors: string[];
    };

export function resolve(api: Api): ResolveResult {
  const recordedErrors: string[] = [];
  const definedEndpoints: EndpointDefinitions = {};
  const definedTypes: TypeDefinitions = {};
  for (const typeDef of api.typeDefs) {
    let error = false;
    if (PRIMARY_TYPES.has(typeDef.name)) {
      recordedErrors.push(`Cannot redefine known type ${typeDef.name}.`);
      error = true;
    }
    if (typeDef.name in definedTypes) {
      recordedErrors.push(`Type ${typeDef.name} is defined multiple times.`);
      error = true;
    }
    if (!error) {
      definedTypes[typeDef.name] = typeDef.type;
    }
  }
  for (const [name, type] of Object.entries(definedTypes)) {
    checkType(name, type, recordedErrors);
  }
  for (const endpoint of api.endpoints) {
    let error = false;
    if (endpoint.name in definedEndpoints) {
      recordedErrors.push(`Cannot redefine endpoint ${endpoint.name}.`);
      error = true;
    }
    if (
      !PRIMARY_TYPES.has(endpoint.input) &&
      !(endpoint.input in definedTypes)
    ) {
      recordedErrors.push(`No such type ${endpoint.input}.`);
      error = true;
    }
    if (
      !PRIMARY_TYPES.has(endpoint.output) &&
      !(endpoint.output in definedTypes)
    ) {
      recordedErrors.push(`No such type ${endpoint.output}.`);
      error = true;
    }
    if (!error) {
      definedEndpoints[endpoint.name] = endpoint;
    }
  }
  if (recordedErrors.length === 0) {
    return {
      kind: "success",
      definedEndpoints,
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
      // Union (2+ items) or Array (1 item).
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
