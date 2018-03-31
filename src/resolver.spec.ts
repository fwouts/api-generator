import "jest";
import { parse } from "./parser";
import { resolve } from "./resolver";

const VALID = parse(`
type a = b | string | int;

type b = {
  field1: string;
  field2: a;
};

type c = string;
`);

const UNKNOWN_TYPE = parse(`
type a = b;
`);

const DEFINED_TWICE = parse(`
type a = string;
type a = string;
`);

test("resolver", () => {
  expect(resolve(VALID)).toEqual({
    kind: "success",
    definedTypes: {
      a: ["b", "string", "int"],
      b: {
        field1: "string",
        field2: "a",
      },
      c: "string",
    },
  });
  expect(resolve(UNKNOWN_TYPE)).toEqual({
    kind: "failure",
    errors: ["Type a refers to unknown type b."],
  });
  expect(resolve(DEFINED_TWICE)).toEqual({
    kind: "failure",
    errors: ["Type a is defined multiple times."],
  });
});
