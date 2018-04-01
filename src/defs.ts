export interface Api {
  endpoints: Endpoint[];
  typeDefs: TypeDef[];
}

export interface Endpoint {
  name: EndpointName;
  method: Method;
  route: RouteSubpath[];
  input: TypeName;
  output: TypeName;
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
  | UnionType
  | StructType
  | OptionalType
  | SymbolType
  | TypeName;

export interface ArrayType {
  kind: "array";
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
