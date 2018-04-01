grammar ApiDef;

api
    : LINEBREAK* (endpoint | typedef)* EOF
    ;

endpoint
    : 'endpoint' LINEBREAK* endpointname LINEBREAK* ':' LINEBREAK* method LINEBREAK* route LINEBREAK* typename LINEBREAK* '->' LINEBREAK* typename separator
    ;

endpointname
    : name
    ;

method
    : 'GET'
    | 'POST'
    | 'PUT'
    | 'DELETE'
    ;

route
    : ('/' subpath)+
    ;

subpath
    : (dynamic=':')? name
    ;

typedef
    : 'type' typename LINEBREAK* '=' LINEBREAK* type separator
    ;

type
    : array LINEBREAK*
    | type '|' LINEBREAK* type
    | struct LINEBREAK*
    | symbol LINEBREAK*
    | typename LINEBREAK*
    ;

array
    : typename '[]'
    ;

struct
    : '{' LINEBREAK* (structfield separator)* '}'
    ;

structfield
    : fieldname (optional='?')? ':' type
    ;

fieldname
    : name
    ;

typename
    : name
    ;

symbol
    : '@' name
    ;

name
    : NAME | 'endpoint' | 'type'
    ;

separator
    : LINEBREAK* ';' LINEBREAK*
    | LINEBREAK+
    ;

NAME
    : [a-zA-Z][a-zA-Z0-9]*
    ;

LINEBREAK
    : [\n\r]
    ;

WHITESPACE
    : [ \t\u000C]+ -> skip
    ;
