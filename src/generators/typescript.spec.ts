import "jest";
import { parse } from "../parser";
import { resolve } from "../resolver";
import { generateTypeScript } from "./typescript";

// IMPORTANT NOTE: Jest gets stuck indefinitely when a string containing "import ... from"
// appears in our code. That's why we hack around it by using `${"from"}` instead of "from".

const API = resolve(
  parse(`
endpoint createUser: POST /users CreateUserRequest -> CreateUserResponse

type CreateUserRequest = {
  name: string
  password: string
  roles: string[]
}

type CreateUserResponse = {
  status: @error
  message: string
} | {
  status: @success
  id: string
  info: {
    name: string
  }
}

endpoint listUsers: GET /users void -> ListUsersResponse

type ListUsersResponse = User[]

endpoint getUser: GET /users/:id void -> User

type User = {
  name: string
}

endpoint deleteUser: DELETE /users/:id void -> void
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
  roles: string[];
}

export type CreateUserResponse = {
  status: 'error';
  message: string;
} | {
  status: 'success';
  id: string;
  info: {
    name: string;
  };
};

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

export async function deleteUser(id: string): Promise<void> {
  let url = \`\${URL}/users/\${id}\`;
  await axios.get(url);
}

export interface CreateUserRequest {
  name: string;
  password: string;
  roles: string[];
}

export type CreateUserResponse = {
  status: 'error';
  message: string;
} | {
  status: 'success';
  id: string;
  info: {
    name: string;
  };
};

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
import { createUser } from './endpoints/createUser';
import { listUsers } from './endpoints/listUsers';
import { getUser } from './endpoints/getUser';
import { deleteUser } from './endpoints/deleteUser';

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

app.delete("/users/:id", async (req, res, next) => {
  try {
    const id = req.params["id"];
    await deleteUser(id);
    res.end();
  } catch (err) {
    next(err);
  }
});

app.listen(PORT, () => console.log(\`Listening on port \${PORT}\`));

export interface CreateUserRequest {
  name: string;
  password: string;
  roles: string[];
}

export type CreateUserResponse = {
  status: 'error';
  message: string;
} | {
  status: 'success';
  id: string;
  info: {
    name: string;
  };
};

export type ListUsersResponse = User[];

export interface User {
  name: string;
}
`);
});
