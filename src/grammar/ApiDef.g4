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
    : 'type' typename '=' union ';'
    ;

union
    : singletype ('|' singletype)*
    | '|' singletype ('|' singletype)+
    ;

singletype
    : typename
    | struct
    ;

typename
    : name
    ;

struct
    : '{' (structfield ';')* '}'
    ;

structfield
    : fieldname ':' union
    ;

fieldname
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
