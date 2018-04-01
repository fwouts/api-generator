import "jest";
import { parse } from "../parser";
import { resolve } from "../resolver";
import { generateTypeScript } from "./typescript";

// IMPORTANT NOTE: Jest gets stuck indefinitely when a string containing "import ... from"
// appears in our code. That's why we hack around it by using `${"from"}` instead of "from".

const API = resolve(
  parse(`
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
`),
);

test("generator only types", () => {
  if (API.kind !== "success") {
    throw new Error(`Invalid test data:\n${API.errors.join("\n")}`);
  }
  expect(generateTypeScript(API.definedEndpoints, API.definedTypes))
    .toEqual(`export interface CreateUserRequest {
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
`);
});

test("generator with client", () => {
  if (API.kind !== "success") {
    throw new Error(`Invalid test data:\n${API.errors.join("\n")}`);
  }
  expect(
    generateTypeScript(API.definedEndpoints, API.definedTypes, {
      endpoints: {
        kind: "client",
        baseUrl: "https://api.test.com",
      },
    }),
  ).toEqual(`import axios from "axios";

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
`);
});

test("generator with server", () => {
  if (API.kind !== "success") {
    throw new Error(`Invalid test data:\n${API.errors.join("\n")}`);
  }
  expect(
    generateTypeScript(API.definedEndpoints, API.definedTypes, {
      endpoints: {
        kind: "server",
      },
    }),
  ).toEqual(`import express from "express";

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
`);
});
