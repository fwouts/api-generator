grammar ApiDef;

api
    : LINEBREAK* (endpoint | typedef)* EOF
    ;

endpoint
    : headers? 'endpoint' endpointname ':' method route typename endpointoutput+ separator
    ;

headers
    :  '@headers' '(' typename ')' LINEBREAK+
    ;

endpointname
    : name
    ;

endpointoutput
    : LINEBREAK+ '->' statusname statuscode typename
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
    | map LINEBREAK *
    | type '|' LINEBREAK* type
    | struct LINEBREAK*
    | symbol LINEBREAK*
    | typename LINEBREAK*
    ;

array
    : typename '[]'
    | 'Array<' typename '>'
    ;

map
    : 'Map<' typename '>'
    ;

struct
    : '{' LINEBREAK* (structfield separator)* '}'
    ;

structfield
    : fieldname (optional='?')? ':' type
    ;

statusname
    : name
    ;

statuscode
    : NUMBER
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
    : [a-zA-Z][a-zA-Z0-9_]*
    ;

NUMBER
    : [0-9]+
    ;

LINEBREAK
    : [\n\r]
    ;

WHITESPACE
    : [ \t\u000C]+ -> skip
    ;

BLOCK_COMMENT
    : '/*' .*? '*/' -> channel(HIDDEN)
    ;

LINE_COMMENT
    : '//' ~[\r\n]* -> channel(HIDDEN)
    ;
