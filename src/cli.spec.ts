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

test("cli generates expected output (types only)", () => {
  const cleanup = testfile(
    "test.api",
    `
type a = b | string | int

type b = {
  field1: string
  field2: a
}

type c = string
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

test("cli generates expected output (client)", () => {
  const cleanup = testfile(
    "test.api",
    `
endpoint createUser: POST /users CreateUserRequest -> CreateUserResponse

type CreateUserRequest = {
  name: string
  password: string
}

type CreateUserResponse = {
  id: string
}

endpoint listUsers: GET /users void -> ListUsersResponse

type ListUsersResponse = User[]

endpoint getUser: GET /users/:id void -> User

type User = {
  name: string
}
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
          `import axios from "axios";

const URL = "https://api.test.com";

export async function createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
  let url = \`\${URL}/users\`;
  const response = await axios.get(url, {
    data: request,
  });
  return response.data;
}

export async function listUsers(): Promise<ListUsersResponse> {
  let url = \`\${URL}/users\`;
  const response = await axios.get(url);
  return response.data;
}

export async function getUser(id: string): Promise<User> {
  let url = \`\${URL}/users/\${id}\`;
  const response = await axios.get(url);
  return response.data;
}

export interface CreateUserRequest {
  name: string;
  password: string;
}

export interface CreateUserResponse {
  id: string;
}

export type ListUsersResponse = User[];

export interface User {
  name: string;
}
`,
        ],
      },
    ]);
  } finally {
    cleanup();
  }
});

test("cli generates expected output (server)", () => {
  const cleanup = testfile(
    "test.api",
    `
endpoint createUser: POST /users CreateUserRequest -> CreateUserResponse

type CreateUserRequest = {
  name: string
  password: string
}

type CreateUserResponse = {
  id: string
}

endpoint listUsers: GET /users void -> ListUsersResponse

type ListUsersResponse = User[]

endpoint getUser: GET /users/:id void -> User

type User = {
  name: string
}
`,
  );
  try {
    const env = runCli("generate typescript test.api --server");
    expect(env.messages).toEqual([
      {
        type: "info",
        messages: [
          `import express from "express";
import { createUser } from './endpoints/createUser';
import { listUsers } from './endpoints/listUsers';
import { getUser } from './endpoints/getUser';

const PORT = 3010;

const app = express();

app.post("/users", async (req, res, next) => {
  try {
    const request: CreateUserRequest = req.body;
    const response: CreateUserResponse = await createUser(request);
    res.json(response);
  } catch (err) {
    next(err);
  }
});

app.get("/users", async (req, res, next) => {
  try {
    const response: ListUsersResponse = await listUsers();
    res.json(response);
  } catch (err) {
    next(err);
  }
});

app.get("/users/:id", async (req, res, next) => {
  try {
    const id = req.params["id"];
    const response: User = await getUser(id);
    res.json(response);
  } catch (err) {
    next(err);
  }
});

app.listen(PORT, () => console.log(\`Listening on port \${PORT}\`));

export interface CreateUserRequest {
  name: string;
  password: string;
}

export interface CreateUserResponse {
  id: string;
}

export type ListUsersResponse = User[];

export interface User {
  name: string;
}
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
type a = b | string | int

type b = {
  field1: string
  field2: a
}

type c = string
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
