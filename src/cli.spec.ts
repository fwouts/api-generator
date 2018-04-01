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

test("cli generates expected output (client)", () => {
  const cleanup = testfile(
    "test.api",
    `
endpoint createUser: POST /users CreateUserRequest -> CreateUserResponse;

type CreateUserRequest = {
  name: string;
  password: string;
};

type CreateUserResponse = {
  id: string;
};

endpoint listUsers: GET /users null -> ListUsersResponse;

type ListUsersResponse = User[];

endpoint getUser: GET /users/:id null -> User;

type User = {
  name: string;
};
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

export async function createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
  let url = \`https://api.test.com/users\`;
  const response = await axios.get(url, {
    data: request,
  });
  return response.data;
}

export async function listUsers(request: null): Promise<ListUsersResponse> {
  let url = \`https://api.test.com/users\`;
  const response = await axios.get(url, {
    data: request,
  });
  return response.data;
}

export async function getUser(id: string, request: null): Promise<User> {
  let url = \`https://api.test.com/users/\${id}\`;
  const response = await axios.get(url, {
    data: request,
  });
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
endpoint createUser: POST /users CreateUserRequest -> CreateUserResponse;

type CreateUserRequest = {
  name: string;
  password: string;
};

type CreateUserResponse = {
  id: string;
};

endpoint listUsers: GET /users null -> ListUsersResponse;

type ListUsersResponse = User[];

endpoint getUser: GET /users/:id null -> User;

type User = {
  name: string;
};
`,
  );
  try {
    const env = runCli("generate typescript test.api --server");
    expect(env.messages).toEqual([
      {
        type: "info",
        messages: [
          `import express from "express";

const PORT = 3010;

const app = express();

app.post("/users", (req, res) => {
  const request: CreateUserRequest = req.body;
  let response: CreateUserResponse;
  // TODO: Implement.
  res.json(response);
});

app.get("/users", (req, res) => {
  const request: null = req.body;
  let response: ListUsersResponse;
  // TODO: Implement.
  res.json(response);
});

app.get("/users/:id", (req, res) => {
  const id = req.params["id"];
  const request: null = req.body;
  let response: User;
  // TODO: Implement.
  res.json(response);
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
