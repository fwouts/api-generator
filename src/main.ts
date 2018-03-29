import { parse } from "./parser";
import { resolve } from "./resolver";

const api = parse(`
type a = b | string;

type b = {
  field1: string;
  field2: a;
};

`);

const resolved = resolve(api, ["string"]);

// tslint:disable-next-line no-console
console.log(JSON.stringify(resolved, null, 2));
