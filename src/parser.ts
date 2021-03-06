import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import {
  Api,
  ArrayType,
  Endpoint,
  EndpointOutput,
  MapType,
  Method,
  RouteSubpath,
  StructType,
  SymbolType,
  Type,
  TypeDef,
  TypeName,
} from "./defs";
import { ApiDefLexer } from "./grammar/ApiDefLexer";
import {
  ApiDefParser,
  ArrayContext,
  EndpointContext,
  EndpointoutputContext,
  HeadersContext,
  MapContext,
  MethodContext,
  RouteContext,
  StructContext,
  StructfieldContext,
  SubpathContext,
  SymbolContext,
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
    headers: read_headers(endpoint.headers()),
    input: read_typename(endpoint.typename()),
    outputs: endpoint.endpointoutput().map(read_endpointoutput),
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

function read_headers(headers?: HeadersContext) {
  if (headers) {
    return read_typename(headers.typename());
  } else {
    return undefined;
  }
}

function read_endpointoutput(
  endpointoutput: EndpointoutputContext,
): EndpointOutput {
  return {
    name: endpointoutput.statusname().text,
    statusCode: parseInt(endpointoutput.statuscode().text, 10),
    type: read_typename(endpointoutput.typename()),
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
  } else if (type.map()) {
    return read_map(type.map()!);
  } else if (type.type().length) {
    return {
      kind: "union",
      items: flattenUnion(type.type().map(read_type)),
    };
  } else if (type.struct()) {
    return read_struct(type.struct()!);
  } else if (type.symbol()) {
    return read_symbol(type.symbol()!);
  } else if (type.typename()) {
    return read_typename(type.typename()!);
  } else {
    throw new Error();
  }
}

function read_array(array: ArrayContext): ArrayType {
  if (array.typename()) {
    return {
      kind: "array",
      items: read_typename(array.typename()!),
    };
  } else if (array.type()) {
    return {
      kind: "array",
      items: read_type(array.type()!),
    };
  } else {
    throw new Error();
  }
}

function read_map(map: MapContext): MapType {
  return {
    kind: "map",
    items: read_type(map.type()),
  };
}

function flattenUnion(types: Type[]): Type[] {
  return types
    .map((type) => {
      if (typeof type !== "string" && type.kind === "union") {
        return type.items;
      } else {
        return [type];
      }
    })
    .reduce((acc, curr) => acc.concat(curr), []);
}

function read_struct(struct: StructContext): StructType {
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
  const name = structfield.fieldname().text;
  let type = read_type(structfield.type());
  if (structfield._optional) {
    type = {
      kind: "optional",
      type,
    };
  }
  return [name, type];
}

function read_symbol(symbol: SymbolContext): SymbolType {
  return {
    kind: "symbol",
    value: symbol.name().text,
  };
}

function read_typename(typename: TypenameContext): TypeName {
  return typename.text;
}
