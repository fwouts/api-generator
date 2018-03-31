import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import {
  Api,
  Endpoint,
  Method,
  RouteSubpath,
  Struct,
  Type,
  TypeDef,
  TypeName,
} from "./defs";
import { ApiDefLexer } from "./grammar/ApiDefLexer";
import {
  ApiDefParser,
  ArrayContext,
  EndpointContext,
  MethodContext,
  RouteContext,
  StructContext,
  StructfieldContext,
  SubpathContext,
  TypeContext,
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
    endpoints: result.endpoint().map(read_endpoint),
    typeDefs: result.typedef().map(read_typedef),
  };
}

function read_endpoint(endpoint: EndpointContext): Endpoint {
  return {
    name: endpoint.endpointname().text,
    method: read_method(endpoint.method()),
    route: read_route(endpoint.route()),
    input: read_typename(endpoint.typename()[0]),
    output: read_typename(endpoint.typename()[1]),
  };
}

function read_method(method: MethodContext): Method {
  return method.text as Method;
}

function read_route(route: RouteContext): RouteSubpath[] {
  return route.subpath().map(read_subpath);
}

function read_subpath(subpath: SubpathContext): RouteSubpath {
  return {
    name: subpath.name().text,
    dynamic: !!subpath._dynamic,
  };
}

function read_typedef(typedef: TypedefContext): TypeDef {
  return {
    name: typedef.typename().text,
    type: read_type(typedef.type()),
  };
}

function read_type(type: TypeContext): Type {
  if (type.array()) {
    return read_array(type.array()!);
  } else if (type.union()) {
    return read_union(type.union()!);
  } else if (type.struct()) {
    return read_struct(type.struct()!);
  } else if (type.typename()) {
    return read_typename(type.typename()!);
  } else {
    throw new Error();
  }
}

function read_array(array: ArrayContext): Type {
  return [read_typename(array.typename())];
}

function read_union(union: UnionContext): Type {
  const u = union.typename().map(read_typename);
  if (u.length === 1) {
    return u[0];
  } else {
    return u;
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
  return [structfield.fieldname().text, read_union(structfield.union())];
}

function read_typename(typename: TypenameContext): TypeName {
  return typename.text;
}
