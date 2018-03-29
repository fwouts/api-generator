grammar ApiDef;

api
    : typedef*
    ;

typedef
    : 'type' NAME '=' union ';'
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
    : '{' (structfield ';')+ '}'
    ;

structfield
    :  NAME ':' union
    ;

NAME
    : [a-zA-Z][a-zA-Z0-9]*
    ;

STRING
    : '"' ~('"')* '"'
    ;

WS
    : [ \t\u000C\r\n]+ -> skip
    ;
