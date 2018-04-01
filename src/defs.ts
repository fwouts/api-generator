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

export type Type = ArrayType | UnionType | Struct | TypeName;

export interface ArrayType {
  kind: "array";
  items: Type;
}

export interface UnionType {
  kind: "union";
  items: Type[];
}

export interface Struct {
  kind: "struct";
  items: {
    [name: string]: Type;
  };
}

export type TypeName = string;
