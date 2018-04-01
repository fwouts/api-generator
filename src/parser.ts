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
  UnionType,
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
  } else if (type.type().length) {
    return mergeUnions(type.type().map(read_type));
  } else if (type.struct()) {
    return read_struct(type.struct()!);
  } else if (type.typename()) {
    return read_typename(type.typename()!);
  } else {
    throw new Error();
  }
}

function read_array(array: ArrayContext): Type {
  return {
    kind: "array",
    items: read_typename(array.typename()),
  };
}

function mergeUnions(types: Type[]): UnionType {
  if (types.length !== 2) {
    throw new Error();
  }
  const [first, second] = types;
  if (typeof first !== "string") {
    if (first.kind === "union") {
      return {
        kind: "union",
        items: first.items.concat(second),
      };
    }
  }
  return {
    kind: "union",
    items: [first, second],
  };
}

function read_struct(struct: StructContext): Struct {
  const items = struct
    .structfield()
    .map(read_structfield)
    .reduce((acc, [fieldName, fieldType]) => {
      return {
        ...acc,
        [fieldName]: fieldType,
      };
    }, {});
  return {
    kind: "struct",
    items,
  };
}

function read_structfield(structfield: StructfieldContext): [string, Type] {
  return [structfield.fieldname().text, read_type(structfield.type())];
}

function read_typename(typename: TypenameContext): TypeName {
  return typename.text;
}
