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
    "Syntax error (4:2): mismatched input '<EOF>' expecting {'|', '{', NAME}.",
  );
  expect(() =>
    parse(`
endpoint a : GET /path
  `),
  ).toThrow("Syntax error (3:2): mismatched input '<EOF>' expecting NAME.");
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

type a = b | string | int;

type b = {
  field1: string;
  field2: a;
};

type c = string;
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
        },
      },
      {
        name: "c",
        type: "string",
      },
    ],
  });
});
