export interface Api {
  typeDefs: TypeDef[];
}

export interface TypeDef {
  name: TypeName;
  type: Type;
}

export type Type = Union | SingleType;

export type Union = SingleType[];

export type SingleType = TypeName | Struct;

export interface Struct {
  [name: string]: Type;
}

export type TypeName = string;
