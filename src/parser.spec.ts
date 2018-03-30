import "jest";
import { parse } from "./parser";

test("parser", () => {
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
