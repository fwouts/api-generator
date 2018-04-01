import "jest";
import { parse } from "./parser";

test("parser catches missing semicolon", () => {
  expect(() =>
    parse(`
type a = b
  `),
  ).toThrow("Syntax error (3:2): missing ';' at '<EOF>'.");
  expect(() =>
    parse(`
endpoint a : POST /path input -> output
  `),
  ).toThrow("Syntax error (3:2): missing ';' at '<EOF>'.");
});

test("parser catches missing end of file", () => {
  expect(() =>
    parse(`
type a = b;
type b =
  `),
  ).toThrow(
    "Syntax error (4:2): mismatched input '<EOF>' expecting {'endpoint', 'type', '{', '@', NAME}.",
  );
  expect(() =>
    parse(`
endpoint a : GET /path
  `),
  ).toThrow(
    "Syntax error (3:2): mismatched input '<EOF>' expecting {'endpoint', 'type', NAME}.",
  );
});

test("parser rejects invalid types", () => {
  expect(() =>
    parse(`
type a = 123
  `),
  ).toThrow("Syntax error (2:9): token recognition error at: '1'.");
});

test("parser rejects extraneous syntax", () => {
  expect(() =>
    parse(`
export type a = string;
`),
  ).toThrow(
    "Syntax error (2:0): extraneous input 'export' expecting {<EOF>, 'endpoint', 'type'}.",
  );
});

test("parser rejects complex types in arrays or unions", () => {
  expect(() =>
    parse(`
type a = {
  abc: string
} | int;
`),
  ).toThrow("Syntax error (4:0): missing ';' at '}'.");
  expect(() =>
    parse(`
type a = {
  abc: string
}[];
`),
  ).toThrow("Syntax error (4:0): missing ';' at '}'.");
});

test("parser accepts empty API", () => {
  expect(parse(``)).toEqual({
    endpoints: [],
    typeDefs: [],
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
          },
        },
      },
    ],
  });
});

test("parser works with complex case", () => {
  expect(
    parse(`
endpoint createUser: POST /users b -> c;
endpoint deleteUser: DELETE /users/:id null -> null;
endpoint endpoint: POST /my/endpoint/type type -> endpoint;

type a = b | string | int;

type b = {
  field1: string;
  field2: a[];
  type: {
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
        output: "c",
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
        input: "null",
        output: "null",
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
        output: "endpoint",
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
