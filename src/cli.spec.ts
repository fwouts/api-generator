import * as fs from "fs";
import "jest";
import { cli } from "./cli";

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
  const cleanup = testfile(
    "test.api",
    `
type a = string;
`,
  );
  try {
    const env = runCli("generate typescript test.api");
    expect(env.messages).toEqual([
      {
        type: "info",
        messages: [
          `export type a = string;
`,
        ],
      },
    ]);
  } finally {
    cleanup();
  }
});

test("cli generates output (client)", () => {
  const cleanup = testfile(
    "test.api",
    `
endpoint endpoint: POST /endpoint void -> a
type a = string;
`,
  );
  try {
    const env = runCli(
      "generate typescript test.api --client https://api.test.com",
    );
    expect(env.messages).toEqual([
      {
        type: "info",
        messages: [
          `import axios from \"axios\";

const URL = \"https://api.test.com\";

export async function endpoint(): Promise<a> {
  const url = \`\${URL}/endpoint\`;
  const response = await axios({
    url,
    method: "POST",
  });
  return response.data;
}

export type a = string;
`,
        ],
      },
    ]);
  } finally {
    cleanup();
  }
});

test("cli generates output (server)", () => {
  const cleanup = testfile(
    "test.api",
    `
endpoint endpoint: POST /endpoint void -> a
type a = string;
`,
  );
  try {
    const env = runCli("generate typescript test.api --server");
    expect(env.messages).toEqual([
      {
        type: "info",
        messages: [
          `import express from "express";
import { endpoint } from './endpoints/endpoint';

const PORT = 3010;

const app = express();

app.post(\"/endpoint\", async (req, res, next) => {
  try {
    const response: a = await endpoint();
    res.json(response);
  } catch (err) {
    next(err);
  }
});

// tslint:disable-next-line no-console
app.listen(PORT, () => console.log(\`Listening on port \${PORT}\`));

export type a = string;
`,
        ],
      },
    ]);
  } finally {
    cleanup();
  }
});

test("cli fails with missing file", () => {
  const env = runCli("generate typescript doesnotexist.api");
  expect(env.messages).toEqual([
    {
      type: "error",
      messages: ["No such file: doesnotexist.api."],
    },
  ]);
});

test("cli fails with unknown generator", () => {
  const cleanup = testfile(
    "test.api",
    `
type a = string;
`,
  );
  try {
    const env = runCli("generate cpp test.api");
    expect(env.messages).toEqual([
      {
        type: "error",
        messages: ["Unknown target: cpp."],
      },
    ]);
  } finally {
    cleanup();
  }
});

function testfile(filename: string, text: string): () => void {
  fs.writeFileSync(filename, text, "utf8");
  return () => {
    fs.unlinkSync(filename);
  };
}

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
