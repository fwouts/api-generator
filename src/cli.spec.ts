import fs from "fs-extra";
import "jest";
import path from "path";
import uuid from "uuid";
import { cli } from "./cli";
import { input } from "./generators/io";

function createApi(text: string) {
  const name = `input-${uuid.v4()}.api`;
  const destination = path.join("test-input", name);
  fs.outputFileSync(destination, text);
  return destination;
}

function prepareOutput() {
  return path.join("test-output", uuid.v4());
}

beforeAll(() => {
  fs.removeSync("test-input");
  fs.removeSync("test-output");
  fs.mkdirSync("test-input");
  fs.mkdirSync("test-output");
});

afterAll(() => {
  fs.removeSync("test-input");
  fs.removeSync("test-output");
});

test("cli fails for unknown commands", () => {
  const env = runCli("some-command");
  expect(env.messages).toEqual([
    {
      type: "error",
      messages: ["Unknown command: some-command."],
    },
  ]);
});

test("cli generates output (types only)", () => {
  const apiSource = createApi(`
type a = string;
`);
  const outputDestination = prepareOutput();
  const env = runCli(`generate typescript ${apiSource} ${outputDestination}`);
  expect(env.messages).toEqual([
    {
      type: "info",
      messages: [`API generated at ${outputDestination}.`],
    },
  ]);
  expect(input(outputDestination)).toMatchObject({
    kind: "directory",
    children: {
      "api.ts": {
        kind: "file",
      },
      "validation.ts": {
        kind: "file",
      },
    },
  });
});

test("cli generates output (client)", () => {
  const apiSource = createApi(`
endpoint endpoint: POST /endpoint void
-> success 200 a
type a = string;
`);
  const outputDestination = prepareOutput();
  const env = runCli(
    `generate typescript ${apiSource} ${outputDestination} --client https://api.test.com`,
  );
  expect(env.messages).toEqual([
    {
      type: "info",
      messages: [`API generated at ${outputDestination}.`],
    },
  ]);
  expect(input(outputDestination)).toMatchObject({
    kind: "directory",
    children: {
      "api.ts": {
        kind: "file",
      },
      "validation.ts": {
        kind: "file",
      },
      "client.ts": {
        kind: "file",
      },
    },
  });
});

test("cli generates output (server)", () => {
  const apiSource = createApi(`
endpoint endpoint: POST /endpoint void
-> success 200 a
type a = string;
`);
  const outputDestination = prepareOutput();
  const env = runCli(
    `generate typescript ${apiSource} ${outputDestination} --server`,
  );
  expect(env.messages).toEqual([
    {
      type: "info",
      messages: [`API generated at ${outputDestination}.`],
    },
  ]);
  expect(input(outputDestination)).toMatchObject({
    kind: "directory",
    children: {
      "api.ts": {
        kind: "file",
      },
      "validation.ts": {
        kind: "file",
      },
      "server.ts": {
        kind: "file",
      },
      "endpoints": {
        kind: "directory",
        children: {
          "endpoint.ts": {
            kind: "file",
          },
        },
      },
    },
  });
});

test("cli fails with missing file", () => {
  const outputDestination = prepareOutput();
  const env = runCli(
    `generate typescript doesnotexist.api ${outputDestination}`,
  );
  expect(env.messages).toEqual([
    {
      type: "error",
      messages: ["No such file: doesnotexist.api."],
    },
  ]);
});

test("cli fails with unknown generator", () => {
  const apiSource = createApi(`
type a = string;
`);
  const outputDestination = prepareOutput();
  const env = runCli(`generate cpp ${apiSource} ${outputDestination}`);
  expect(env.messages).toEqual([
    {
      type: "error",
      messages: ["Unknown target: cpp."],
    },
  ]);
});

function runCli(command: string) {
  const messages: Array<{
    type: "info" | "warn" | "error";
    messages: any[];
  }> = [];
  const info = (message: string) => {
    messages.push({
      type: "info",
      messages: [message],
    });
  };
  const warn = (message: string) => {
    messages.push({
      type: "warn",
      messages: [message],
    });
  };
  const error = (message: string, e?: Error) => {
    messages.push({
      type: "error",
      messages: e ? [message, e] : [message],
    });
  };
  const env = {
    argv: ["node", __filename, ...command.split(" ")],
    info,
    error,
    warn,
    messages,
  };
  cli(env);
  return env;
}
