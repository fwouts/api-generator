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

test("cli generates expected files", () => {
  const cleanup = testfile(
    "test.api",
    `
type a = b | string | int;

type b = {
  field1: string;
  field2: a;
};

type c = string;
`,
  );
  try {
    const env = runCli("generate typescript test.api");
    expect(env.messages).toEqual([
      {
        type: "info",
        messages: [
          `export type a = b | string | number;

export interface b {
  field1: string;
  field2: a;
}

export type c = string;
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
type a = b | string | int;

type b = {
  field1: string;
  field2: a;
};

type c = string;
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
