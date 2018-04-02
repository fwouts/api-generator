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
  password?: string
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

@headers(AuthOptional)
endpoint listUsers: GET /users void -> ListUsersResponse

type ListUsersResponse = User[]

@headers(AuthRequired)
endpoint getUser: GET /users/:id void -> User

type User = {
  name: string
}

@headers(AuthRequired)
endpoint deleteUser: DELETE /users/:id void -> void

type AuthOptional = {
  Authorization?: string
}

type AuthRequired = {
  Authorization: string
}
`),
);

test("generator only types", () => {
  if (API.kind !== "success") {
    throw new Error(`Invalid test data:\n${API.errors.join("\n")}`);
  }
  expect(generateTypeScript(API.definedEndpoints, API.definedTypes))
    .toEqual(`export interface CreateUserRequest {
  name: string;
  password?: string;
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

export interface AuthOptional {
  Authorization?: string;
}

export interface AuthRequired {
  Authorization: string;
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
  const url = \`\${URL}/users\`;
  const response = await axios({
    url,
    method: "POST",
    data: request,
  });
  return response.data;
}

export async function listUsers(headers: AuthOptional): Promise<ListUsersResponse> {
  const url = \`\${URL}/users\`;
  const response = await axios({
    url,
    method: "GET",
    headers,
  });
  return response.data;
}

export async function getUser(headers: AuthRequired, id: string): Promise<User> {
  const url = \`\${URL}/users/\${id}\`;
  const response = await axios({
    url,
    method: "GET",
    headers,
  });
  return response.data;
}

export async function deleteUser(headers: AuthRequired, id: string): Promise<void> {
  const url = \`\${URL}/users/\${id}\`;
  await axios({
    url,
    method: "DELETE",
    headers,
  });
}

export interface CreateUserRequest {
  name: string;
  password?: string;
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

export interface AuthOptional {
  Authorization?: string;
}

export interface AuthRequired {
  Authorization: string;
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
    const headers: AuthOptional = {
      Authorization: req.header("Authorization"),
    };
    const response: ListUsersResponse = await listUsers(headers);
    res.json(response);
  } catch (err) {
    next(err);
  }
});

app.get("/users/:id", async (req, res, next) => {
  try {
    const headers: AuthRequired = {
      Authorization: req.header("Authorization") || "",
    };
    const id = req.params["id"];
    const response: User = await getUser(headers, id);
    res.json(response);
  } catch (err) {
    next(err);
  }
});

app.delete("/users/:id", async (req, res, next) => {
  try {
    const headers: AuthRequired = {
      Authorization: req.header("Authorization") || "",
    };
    const id = req.params["id"];
    await deleteUser(headers, id);
    res.end();
  } catch (err) {
    next(err);
  }
});

// tslint:disable-next-line no-console
app.listen(PORT, () => console.log(\`Listening on port \${PORT}\`));

export interface CreateUserRequest {
  name: string;
  password?: string;
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

export interface AuthOptional {
  Authorization?: string;
}

export interface AuthRequired {
  Authorization: string;
}
`);
});
