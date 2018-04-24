import fs from "fs-extra";
import { parse } from "../../parser";
import { resolve } from "../../resolver";
import { Describe_Response } from "../api/types";

export async function describe(): Promise<Describe_Response> {
  const apiPath = process.argv[2];
  if (!(await fs.pathExists(apiPath))) {
    return {
      kind: "failure",
      data: `No API definition found at ${apiPath}.`,
    };
  }
  let input;
  try {
    input = await fs.readFile(apiPath, "utf8");
  } catch (e) {
    return {
      kind: "failure",
      data: `Unable to read file at ${apiPath}.`,
    };
  }
  let api;
  try {
    api = parse(input);
  } catch (e) {
    return {
      kind: "failure",
      data: `Could not parse ${apiPath}:\n${e.message}`,
    };
  }
  const result = resolve(api);
  switch (result.kind) {
    case "success":
      return {
        kind: "success",
        data: {
          endpoints: result.definedEndpoints,
          types: result.definedTypes,
        },
      };
    case "failure":
      return {
        kind: "failure",
        data: `Could not resolve ${apiPath}:\n${result.errors.join("\n")}`,
      };
  }
}
