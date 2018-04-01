import { Api, Endpoint, PRIMITIVE_TYPES, Type } from "./defs";

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
    if (PRIMITIVE_TYPES.has(typeDef.name)) {
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
      endpoint.input !== "void" &&
      !PRIMITIVE_TYPES.has(endpoint.input) &&
      !(endpoint.input in definedTypes)
    ) {
      recordedErrors.push(`No such type ${endpoint.input}.`);
      error = true;
    }
    if (
      endpoint.output !== "void" &&
      !PRIMITIVE_TYPES.has(endpoint.output) &&
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
      if (!PRIMITIVE_TYPES.has(type) && !(type in definedTypes)) {
        errors.push(`Type ${name} refers to unknown type ${type}.`);
      }
    } else if (type.kind === "array") {
      checkType(name, type.items, errors);
    } else if (type.kind === "union") {
      for (const possibleType of type.items) {
        checkType(name, possibleType, errors);
      }
    } else if (type.kind === "struct") {
      for (const [fieldName, fieldType] of Object.entries(type.items)) {
        checkType(`${name}.${fieldName}`, fieldType, errors);
      }
    } else if (type.kind === "optional") {
      checkType(name, type.type, errors);
    } else if (type.kind === "symbol") {
      // Always valid.
    } else {
      throw new Error();
    }
  }
}
