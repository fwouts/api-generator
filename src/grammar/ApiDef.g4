grammar ApiDef;

api
    : (endpoint | typedef)* EOF
    ;

endpoint
    : 'endpoint' endpointname ':' method route typename '->' typename ';'
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
    : 'type' typename '=' type ';'
    ;

type
    : array
    | union
    | struct
    | typename
    ;

array
    : typename '[]'
    ;

union
    : typename ('|' typename)*
    | '|' typename ('|' typename)+
    ;

struct
    : '{' (structfield ';')* '}'
    ;

structfield
    : fieldname ':' type
    ;

fieldname
    : name
    ;

typename
    : name
    ;

name
    : NAME | 'endpoint' | 'type'
    ;

NAME
    : [a-zA-Z][a-zA-Z0-9]*
    ;

WS
    : [ \t\u000C\r\n]+ -> skip
    ;
