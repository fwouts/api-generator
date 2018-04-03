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
  expect(input(outputDestination)).toEqual({
    kind: "directory",
    children: {
      "api.ts": {
        kind: "file",
        content: `export type a = string;
`,
      },
    },
  });
});

test("cli generates output (client)", () => {
  const apiSource = createApi(`
endpoint endpoint: POST /endpoint void -> a
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
  expect(input(outputDestination)).toEqual({
    kind: "directory",
    children: {
      "api.ts": {
        kind: "file",
        content: `export type a = string;
`,
      },
      "client.ts": {
        kind: "file",
        content: `import axios from "axios";
import * as api from "./api";

const URL = "https://api.test.com";

export async function endpoint(): Promise<api.a> {
  const url = \`\${URL}/endpoint\`;
  const response = await axios({
    url,
    method: "POST",
  });
  return response.data;
}
`,
      },
    },
  });
});

test("cli generates output (server)", () => {
  const apiSource = createApi(`
endpoint endpoint: POST /endpoint void -> a
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
  expect(input(outputDestination)).toEqual({
    kind: "directory",
    children: {
      "api.ts": {
        kind: "file",
        content: `export type a = string;
`,
      },
      "server.ts": {
        kind: "file",
        content: `import express from "express";
import * as api from "./api";
import { endpoint } from "./endpoints/endpoint";

const PORT = 3010;

const app = express();

app.post("/endpoint", async (req, res, next) => {
  try {
    const response: api.a = await endpoint();
    res.json(response);
  } catch (err) {
    next(err);
  }
});

// tslint:disable-next-line no-console
app.listen(PORT, () => console.log(\`Listening on port \${PORT}\`));
`,
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
