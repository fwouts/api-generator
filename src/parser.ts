import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { Api, SingleType, Struct, Type, TypeDef, TypeName } from "./defs";
import { ApiDefLexer } from "./grammar/ApiDefLexer";
import {
  ApiDefParser,
  SingletypeContext,
  StructContext,
  StructfieldContext,
  TypedefContext,
  TypenameContext,
  UnionContext,
} from "./grammar/ApiDefParser";

export function parse(code: string): Api {
  const inputStream = new ANTLRInputStream(code);
  const lexer = new ApiDefLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new ApiDefParser(tokenStream);
  let error: {
    line: number;
    charPositionInLine: number;
    message: string;
  } | null = null;
  lexer.removeErrorListeners();
  lexer.addErrorListener({
    syntaxError: (
      recognizer,
      offendingSymbol,
      line,
      charPositionInLine,
      message,
      e,
    ) => {
      if (!error) {
        error = { line, charPositionInLine, message };
      }
    },
  });
  parser.removeErrorListeners();
  parser.addErrorListener({
    syntaxError: (
      recognizer,
      offendingSymbol,
      line,
      charPositionInLine,
      message,
      e,
    ) => {
      if (!error) {
        error = { line, charPositionInLine, message };
      }
    },
  });
  const result = parser.api();
  if (error) {
    throw new Error(
      `Syntax error (${error!.line}:${error!.charPositionInLine}): ${
        error!.message
      }.`,
    );
  }
  return {
    typeDefs: result.typedef().map(read_typedef),
  };
}

function read_typedef(typedef: TypedefContext): TypeDef {
  return {
    name: typedef.NAME().text,
    type: read_union(typedef.union()),
  };
}

function read_union(union: UnionContext): Type {
  const u = union.singletype().map(read_singletype);
  if (u.length === 1) {
    return u[0];
  } else {
    return u;
  }
}

function read_singletype(singletype: SingletypeContext): SingleType {
  if (singletype.typename()) {
    return read_typename(singletype.typename()!);
  } else if (singletype.struct()) {
    return read_struct(singletype.struct()!);
  } else {
    throw new Error();
  }
}

function read_struct(struct: StructContext): Struct {
  return struct
    .structfield()
    .map(read_structfield)
    .reduce((acc, [fieldName, fieldType]) => {
      return {
        ...acc,
        [fieldName]: fieldType,
      };
    }, {});
}

function read_structfield(structfield: StructfieldContext): [string, Type] {
  return [structfield.NAME().text, read_union(structfield.union())];
}

function read_typename(typename: TypenameContext): TypeName {
  return typename.NAME().text;
}
