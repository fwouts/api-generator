import "jest";
import { DEFAULT_TYPESCRIPT_MATCHER, generateTypeScript } from "./generator";
import { parse } from "./parser";
import { resolve } from "./resolver";

// IMPORTANT NOTE: Jest gets stuck indefinitely when a string containing "import ... from"
// appears in our code. That's why we hack around it by using `${"from"}` instead of "from".

const API = resolve(
  parse(`
type a = b | string | int;

type b = {
  field1: string;
  field2: a;
};

type c = string;

type d = {};
`),
  ["int", "string"],
);

test("generator", () => {
  if (API.kind !== "success") {
    throw new Error(`Invalid test data:\n${API.errors.join("\n")}`);
  }
  expect(
    generateTypeScript(
      API.knownTypes,
      API.definedTypes,
      DEFAULT_TYPESCRIPT_MATCHER,
    ),
  ).toEqual(`export type int = number;

export type a = b | string | int;

export interface b {
  field1: string,
  field2: a,
}

export type c = string;

export interface d {
}
`);
  expect(
    generateTypeScript(API.knownTypes, API.definedTypes, (typeName) => {
      switch (typeName) {
        case "string":
          return {
            path: "@/custom/str",
            what: "default",
          };
        case "int":
          return {
            path: "@/custom/integer",
            what: "int",
          };
        default:
          return null;
      }
    }),
  ).toEqual(`import { int } ${"from"} "@/custom/integer";
import string ${"from"} "@/custom/str";

export type a = b | string | int;

export interface b {
  field1: string,
  field2: a,
}

export type c = string;

export interface d {
}
`);
  expect(
    generateTypeScript(API.knownTypes, API.definedTypes, (typeName) => {
      switch (typeName) {
        case "string":
          return {
            path: "@/custom/str",
            what: "default",
          };
        case "int":
          return {
            path: "@/custom/integer",
            what: "int64",
          };
        default:
          return null;
      }
    }),
  ).toEqual(`import { int64 } ${"from"} "@/custom/integer";
import string ${"from"} "@/custom/str";

export type int = int64;

export type a = b | string | int;

export interface b {
  field1: string,
  field2: a,
}

export type c = string;

export interface d {
}
`);
});
