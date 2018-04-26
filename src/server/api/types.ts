export interface DescribeResponse {
  endpoints: { [key: string]: Endpoint };
  types: { [key: string]: Type };
}

export interface Endpoint {
  name: string;
  method: Method;
  route: RouteSubpath[];
  headers?: TypeName;
  input: TypeName;
  outputs: Output[];
}

export type Method = "GET" | "POST" | "PUT" | "DELETE";

export interface RouteSubpath {
  name: string;
  dynamic: boolean;
}

export interface Output {
  name: string;
  statusCode: number;
  type: TypeName;
}

export type Type = ArrayType | MapType | UnionType | StructType | OptionalType | SymbolType | TypeName;

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
  items: { [key: string]: Type };
}

export interface OptionalType {
  kind: "optional";
  type: Type;
}

export interface SymbolType {
  kind: "symbol";
  value: string;
}

export type TypeName = string | PrimitiveType;

export type PrimitiveType = "bool" | "int" | "long" | "float" | "double" | "string" | "null";

export type Describe_Response = {
  kind: "success";
  data: DescribeResponse;
} | {
  kind: "failure";
  data: string;
};
