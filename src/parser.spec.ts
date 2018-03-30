import "jest";
import { parse } from "./parser";

test("parser", () => {
  expect(() =>
    parse(`
  type a = b
  `),
  ).toThrow("Syntax error (3:2): missing ';' at '<EOF>'.");
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
  type a = 123
  `),
  ).toThrow("Syntax error (2:11): token recognition error at: '1'.");
  expect(parse(``)).toEqual({
    typeDefs: [],
  });
  expect(
    parse(`
  type a = b | string | int;

  type b = {
    field1: string;
    field2: a;
  };

  type c = string;
  `),
  ).toEqual({
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
