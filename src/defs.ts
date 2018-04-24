export interface Api {
  endpoints: Endpoint[];
  typeDefs: TypeDef[];
}

export interface Endpoint {
  name: EndpointName;
  method: Method;
  route: RouteSubpath[];
  headers?: TypeName;
  input: TypeName;
  outputs: EndpointOutput[];
}

export interface EndpointOutput {
  name: string;
  statusCode: number;
  type: TypeName;
}

export type EndpointName = string;

export type Method = "GET" | "POST" | "PUT" | "DELETE";

export interface RouteSubpath {
  name: string;
  dynamic: boolean;
}

export interface TypeDef {
  name: TypeName;
  type: Type;
}

export type Type =
  | ArrayType
  | MapType
  | UnionType
  | StructType
  | OptionalType
  | SymbolType
  | TypeName;

export interface ArrayType {
  kind: "array";
  items: Type;
}

export interface MapType {
  kind: "map";
  items: Type;
}

export interface UnionType {
  kind: "union";
  items: Type[];
}

export interface StructType {
  kind: "struct";
  items: {
    [name: string]: Type;
  };
}

export interface OptionalType {
  kind: "optional";
  type: Type;
}

export interface SymbolType {
  kind: "symbol";
  value: string;
}

export type TypeName = string;

export type PrimitiveType =
  | "bool"
  | "int"
  | "long"
  | "float"
  | "double"
  | "string"
  | "null";

export const PRIMITIVE_TYPES = new Set([
  "bool",
  "int",
  "long",
  "float",
  "double",
  "string",
  "null",
]);
