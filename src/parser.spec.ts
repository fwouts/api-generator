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
    "Syntax error (4:2): mismatched input '<EOF>' expecting {'endpoint', 'type', '|', '{', NAME}.",
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

test("parser accepts empty API", () => {
  expect(parse(``)).toEqual({
    endpoints: [],
    typeDefs: [],
  });
});

test("parser works", () => {
  expect(
    parse(`
endpoint createUser: POST /users b -> c;
endpoint deleteUser: DELETE /users/:id null -> null;
endpoint endpoint: POST /my/endpoint/type type -> endpoint;

type a = b | string | int;

type b = {
  field1: string;
  field2: a;
  type: type;
};

type c = string;

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
        type: ["b", "string", "int"],
      },
      {
        name: "b",
        type: {
          field1: "string",
          field2: "a",
          type: "type",
        },
      },
      {
        name: "c",
        type: "string",
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
