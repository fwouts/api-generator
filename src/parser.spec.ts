import "jest";
import { parse } from "./parser";

test("parser catches missing end of file", () => {
  expect(() =>
    parse(`
type a = b;
type b =
  `),
  ).toThrow(
    "Syntax error (4:2): extraneous input '<EOF>' expecting {'endpoint', 'type', '{', '@', NAME, LINEBREAK}.",
  );
  expect(() =>
    parse(`
endpoint a : GET /path
  `),
  ).toThrow(
    "Syntax error (2:22): missing {'endpoint', 'type', NAME} at '\\n'.",
  );
});

test("parser rejects invalid types", () => {
  expect(() =>
    parse(`
type a = 123
  `),
  ).toThrow(
    "Syntax error (2:9): extraneous input '123' expecting {'endpoint', 'type', '{', '@', NAME, LINEBREAK}.",
  );
});

test("parser rejects extraneous syntax", () => {
  expect(() =>
    parse(`
export type a = string;
`),
  ).toThrow(
    "Syntax error (2:0): extraneous input 'export' expecting {<EOF>, 'endpoint', '@headers', 'type', LINEBREAK}.",
  );
});

test("parser rejects complex types in arrays", () => {
  expect(() =>
    parse(`
type a = {
  abc: string;
}[];
`),
  ).toThrow(
    "Syntax error (4:1): extraneous input '[]' expecting {';', LINEBREAK}.",
  );
});

test("parser accepts empty API", () => {
  expect(parse(``)).toEqual({
    endpoints: [],
    typeDefs: [],
  });
});

test("parser ignores comments", () => {
  expect(
    parse(`
type a = string;
/*
type b = int;
*/ type c = string;  /* type d = int; */

// type e = int;
  // type f = int;
type g = string;
  `),
  ).toEqual({
    endpoints: [],
    typeDefs: [
      {
        name: "a",
        type: "string",
      },
      {
        name: "c",
        type: "string",
      },
      {
        name: "g",
        type: "string",
      },
    ],
  });
});

test("parser handles symbols", () => {
  expect(
    parse(`
type a = @success | @failure;
  `),
  ).toEqual({
    endpoints: [],
    typeDefs: [
      {
        name: "a",
        type: {
          kind: "union",
          items: [
            {
              kind: "symbol",
              value: "success",
            },
            {
              kind: "symbol",
              value: "failure",
            },
          ],
        },
      },
    ],
  });
});

test("parser handles unions", () => {
  expect(
    parse(`
type a = string | int;
  `),
  ).toEqual({
    endpoints: [],
    typeDefs: [
      {
        name: "a",
        type: {
          kind: "union",
          items: ["string", "int"],
        },
      },
    ],
  });
});

test("parser handles arrays", () => {
  expect(
    parse(`
type a = string[];
  `),
  ).toEqual({
    endpoints: [],
    typeDefs: [
      {
        name: "a",
        type: {
          kind: "array",
          items: "string",
        },
      },
    ],
  });
});

test("parser handles structs", () => {
  expect(
    parse(`
type a = {
  myfield: string;
  myoptionalfield?: a;
};
  `),
  ).toEqual({
    endpoints: [],
    typeDefs: [
      {
        name: "a",
        type: {
          kind: "struct",
          items: {
            myfield: "string",
            myoptionalfield: {
              kind: "optional",
              type: "a",
            },
          },
        },
      },
    ],
  });
});

test("parser works with complex case", () => {
  expect(
    parse(`
endpoint createUser: POST /users b
-> success 200 c;

@headers(AuthRequired)
endpoint deleteUser: DELETE /users/:id void
-> success 200 void
-> failure 403 void;

@headers(AuthRequired)
endpoint endpoint: POST /my/endpoint/type type
-> success 200 endpoint
-> failure 403 void;

type AuthRequired = {
  Authorization: string
}

type a = b | string | int;

type b = {
  field1: string;
  field2: a[];
  type?: {
    abc: type;
   } | endpoint;
};

type c = string;

type d = b[];

type type = a;

type endpoint = b;
  `),
  ).toEqual({
    endpoints: [
      {
        name: "createUser",
        method: "POST",
        route: [
          {
            dynamic: false,
            name: "users",
          },
        ],
        input: "b",
        outputs: [
          {
            name: "success",
            statusCode: 200,
            type: "c",
          },
        ],
      },
      {
        name: "deleteUser",
        method: "DELETE",
        route: [
          {
            dynamic: false,
            name: "users",
          },
          {
            dynamic: true,
            name: "id",
          },
        ],
        headers: "AuthRequired",
        input: "void",
        outputs: [
          {
            name: "success",
            statusCode: 200,
            type: "void",
          },
          {
            name: "failure",
            statusCode: 403,
            type: "void",
          },
        ],
      },
      {
        name: "endpoint",
        method: "POST",
        route: [
          {
            dynamic: false,
            name: "my",
          },
          {
            dynamic: false,
            name: "endpoint",
          },
          {
            dynamic: false,
            name: "type",
          },
        ],
        headers: "AuthRequired",
        input: "type",
        outputs: [
          {
            name: "success",
            statusCode: 200,
            type: "endpoint",
          },
          {
            name: "failure",
            statusCode: 403,
            type: "void",
          },
        ],
      },
    ],
    typeDefs: [
      {
        name: "AuthRequired",
        type: {
          kind: "struct",
          items: {
            Authorization: "string",
          },
        },
      },
      {
        name: "a",
        type: {
          kind: "union",
          items: ["b", "string", "int"],
        },
      },
      {
        name: "b",
        type: {
          kind: "struct",
          items: {
            field1: "string",
            field2: {
              kind: "array",
              items: "a",
            },
            type: {
              kind: "optional",
              type: {
                kind: "union",
                items: [
                  {
                    kind: "struct",
                    items: {
                      abc: "type",
                    },
                  },
                  "endpoint",
                ],
              },
            },
          },
        },
      },
      {
        name: "c",
        type: "string",
      },
      {
        name: "d",
        type: {
          kind: "array",
          items: "b",
        },
      },
      {
        name: "type",
        type: "a",
      },
      {
        name: "endpoint",
        type: "b",
      },
    ],
  });
});

test("parser works with complex case without semicolon", () => {
  expect(
    parse(`
endpoint createUser: POST /users b
-> success 200 c

endpoint deleteUser: DELETE /users/:id void
-> success 200 void
-> failure 403 void

endpoint endpoint: POST /my/endpoint/type type
-> success 200 endpoint
-> failure 403 void

type a = b | string | int

type b = {
  field1: string

  type: {
    abc: type
  }
  |
  endpoint

  field2: a[]
}

type c = string

type d = b[]

type type = a

type endpoint = b
  `),
  ).toEqual({
    endpoints: [
      {
        name: "createUser",
        method: "POST",
        route: [
          {
            dynamic: false,
            name: "users",
          },
        ],
        input: "b",
        outputs: [
          {
            name: "success",
            statusCode: 200,
            type: "c",
          },
        ],
      },
      {
        name: "deleteUser",
        method: "DELETE",
        route: [
          {
            dynamic: false,
            name: "users",
          },
          {
            dynamic: true,
            name: "id",
          },
        ],
        input: "void",
        outputs: [
          {
            name: "success",
            statusCode: 200,
            type: "void",
          },
          {
            name: "failure",
            statusCode: 403,
            type: "void",
          },
        ],
      },
      {
        name: "endpoint",
        method: "POST",
        route: [
          {
            dynamic: false,
            name: "my",
          },
          {
            dynamic: false,
            name: "endpoint",
          },
          {
            dynamic: false,
            name: "type",
          },
        ],
        input: "type",
        outputs: [
          {
            name: "success",
            statusCode: 200,
            type: "endpoint",
          },
          {
            name: "failure",
            statusCode: 403,
            type: "void",
          },
        ],
      },
    ],
    typeDefs: [
      {
        name: "a",
        type: {
          kind: "union",
          items: ["b", "string", "int"],
        },
      },
      {
        name: "b",
        type: {
          kind: "struct",
          items: {
            field1: "string",
            field2: {
              kind: "array",
              items: "a",
            },
            type: {
              kind: "union",
              items: [
                {
                  kind: "struct",
                  items: {
                    abc: "type",
                  },
                },
                "endpoint",
              ],
            },
          },
        },
      },
      {
        name: "c",
        type: "string",
      },
      {
        name: "d",
        type: {
          kind: "array",
          items: "b",
        },
      },
      {
        name: "type",
        type: "a",
      },
      {
        name: "endpoint",
        type: "b",
      },
    ],
  });
});
