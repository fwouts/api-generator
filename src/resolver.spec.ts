import "jest";
import { parse } from "./parser";
import { resolve } from "./resolver";

test("resolver works", () => {
  expect(
    resolve(
      parse(`
type a = b | string | int | @hello

type b = {
  field1: string
  field2: a
  field3?: b
}

type c = string
`),
    ),
  ).toEqual({
    kind: "success",
    definedEndpoints: {},
    definedTypes: {
      a: {
        kind: "union",
        items: [
          "b",
          "string",
          "int",
          {
            kind: "symbol",
            value: "hello",
          },
        ],
      },
      b: {
        kind: "struct",
        items: {
          field1: "string",
          field2: "a",
          field3: {
            kind: "optional",
            type: "b",
          },
        },
      },
      c: "string",
    },
  });
});

test("resolver fails with duplicate endpoint names", () => {
  expect(
    resolve(
      parse(`
endpoint getUser: GET /users/:id void -> User
endpoint getUser: GET /users/:id void -> User

type User = {
  name: string
}
`),
    ),
  ).toEqual({
    kind: "failure",
    errors: ["Cannot redefine endpoint getUser."],
  });
});

test("resolver fails with unknown type reference", () => {
  expect(
    resolve(
      parse(`
type a = b
`),
    ),
  ).toEqual({
    kind: "failure",
    errors: ["Type a refers to unknown type b."],
  });
  expect(
    resolve(
      parse(`
@headers(c)
endpoint myendpoint: GET /endpoint a -> b
`),
    ),
  ).toEqual({
    kind: "failure",
    errors: ["No such type c.", "No such type a.", "No such type b."],
  });
});

test("resolver fails with duplicate definitions", () => {
  expect(
    resolve(
      parse(`
type a = string
type a = string
`),
    ),
  ).toEqual({
    kind: "failure",
    errors: ["Type a is defined multiple times."],
  });
});
