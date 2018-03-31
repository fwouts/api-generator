grammar ApiDef;

api
    : typedef* EOF
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
