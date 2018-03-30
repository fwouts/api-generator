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

const DEFINED_TWICE = parse(`
type a = string;
type a = string;
`);

test("resolver", () => {
  expect(resolve(VALID, ["string"])).toEqual({
    kind: "failure",
    errors: ["Type a refers to unknown type int."],
  });
  expect(resolve(VALID, ["a", "string"])).toEqual({
    kind: "failure",
    errors: ["Cannot redefine known type a."],
  });
  expect(resolve(VALID, ["int", "string"])).toEqual({
    kind: "success",
    definedTypes: {
      a: ["b", "string", "int"],
      b: {
        field1: "string",
        field2: "a",
      },
      c: "string",
    },
    knownTypes: ["int", "string"],
  });
  expect(resolve(DEFINED_TWICE, ["int", "string"])).toEqual({
    kind: "failure",
    errors: ["Type a is defined multiple times."],
  });
});
