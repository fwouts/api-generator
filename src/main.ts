import {
  DEFAULT_TYPESCRIPT_MATCHER,
  generateTypeScript,
} from "./generators/typescript";
import { parse } from "./parser";
import { resolve } from "./resolver";

const api = parse(`
type a = b | string | int;

type b = {
  field1: string;
  field2: a;
};
`);

const resolved = resolve(api, ["int", "string"]);

// tslint:disable-next-line no-console
console.log(JSON.stringify(resolved, null, 2));

if (resolved.kind === "success") {
  // tslint:disable-next-line no-console
  console.log(
    generateTypeScript(
      resolved.knownTypes,
      resolved.definedTypes,
      DEFAULT_TYPESCRIPT_MATCHER,
    ),
  );
}
