import "jest";
import { parse } from "../parser";
import { resolve } from "../resolver";
import { generateTypeScript } from "./typescript";

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
);

test("generator", () => {
  if (API.kind !== "success") {
    throw new Error(`Invalid test data:\n${API.errors.join("\n")}`);
  }
  expect(generateTypeScript(API.definedTypes))
    .toEqual(`export type a = b | string | number;

export interface b {
  field1: string;
  field2: a;
}

export type c = string;

export interface d {
}
`);
});
