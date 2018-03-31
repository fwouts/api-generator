grammar ApiDef;

api
    : (endpoint | typedef)* EOF
    ;

endpoint
    : 'endpoint' endpointname ':' method route typename '->' typename ';'
    ;

endpointname
    : NAME
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
    : (dynamic=':')? NAME
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
    : NAME
    ;

struct
    : '{' (structfield ';')* '}'
    ;

structfield
    : fieldname ':' union
    ;

fieldname
    : NAME
    ;

NAME
    : [a-zA-Z][a-zA-Z0-9]*
    ;

WS
    : [ \t\u000C\r\n]+ -> skip
    ;
