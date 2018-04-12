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

@headers(b)
endpoint getUser: GET /users/:id void
-> success 200 a
-> failure 403 string
`),
    ),
  ).toEqual({
    kind: "success",
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
      GetUser_Response: {
        kind: "union",
        items: [
          {
            kind: "struct",
            items: {
              data: "a",
              kind: {
                kind: "symbol",
                value: "success",
              },
            },
          },
          {
            kind: "struct",
            items: {
              data: "string",
              kind: {
                kind: "symbol",
                value: "failure",
              },
            },
          },
        ],
      },
    },
    definedEndpoints: {
      getUser: {
        headers: "b",
        input: "void",
        method: "GET",
        name: "getUser",
        outputs: [
          {
            name: "success",
            statusCode: 200,
            type: "a",
          },
          {
            name: "failure",
            statusCode: 403,
            type: "string",
          },
        ],
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
      },
    },
  });
});

test("resolver fails with duplicate endpoint names", () => {
  expect(
    resolve(
      parse(`
endpoint getUser: GET /users/:id void
-> success 200 User
endpoint getUser: GET /users/:id void
-> success 200 User

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
endpoint myendpoint: GET /endpoint a
-> success 200 b
-> failure 403 d
`),
    ),
  ).toEqual({
    kind: "failure",
    errors: [
      "No such type c.",
      "No such type a.",
      "No such type b.",
      "No such type d.",
    ],
  });
});

test("resolver fails with conflicting endpoint outputs", () => {
  expect(
    resolve(
      parse(`
endpoint myendpoint: GET /endpoint void
-> success 200 int
-> success 403 int
-> failure 403 int
`),
    ),
  ).toEqual({
    kind: "failure",
    errors: [
      "Multiple outputs with the name success.",
      "Multiple outputs for the status code 403.",
    ],
  });
});

test("resolver fails with conflicting types", () => {
  expect(
    resolve(
      parse(`
endpoint myEndpoint: GET /endpoint void
-> success 200 MyEndpoint_Response
-> failure 403 int

type MyEndpoint_Response = {
  a: string
}
`),
    ),
  ).toEqual({
    kind: "failure",
    errors: ["Type MyEndpoint_Response must be renamed to prevent a conflict."],
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
