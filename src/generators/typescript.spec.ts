import "jest";
import ts from "typescript";
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
  expect(generateTypeScript(API.definedEndpoints, API.definedTypes)).toEqual({
    kind: "directory",
    children: {
      "api.ts": {
        kind: "file",
        content: `export interface CreateUserRequest {
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
`,
      },
    },
  });
});

test("generator creates enforceable types", () => {
  if (API.kind !== "success") {
    throw new Error(`Invalid test data:\n${API.errors.join("\n")}`);
  }
  const generated = generateTypeScript(API.definedEndpoints, API.definedTypes);
  const apiSourceFile = generated.children["api.ts"];
  expect(apiSourceFile).toBeTruthy();
  if (apiSourceFile.kind !== "file") {
    throw expect(apiSourceFile.kind).toEqual("file");
  }
  const testSource =
    apiSourceFile.content +
    `
    let validRequest: CreateUserRequest = {
      name: "Hello",
      roles: [],
    };

    let requestMissingRoles: CreateUserRequest = {
      name: "test",
    };

    let responseMissingMessage: CreateUserResponse = {
      status: "error",
    };
  `;
  const { errors } = compile(testSource);
  expect(errors).toEqual([
    "Type '{ name: string; }' is not assignable to type 'CreateUserRequest'.",
    "Type '{ status: \"error\"; }' is not assignable to type 'CreateUserResponse'.",
  ]);
});

test("generator with client", () => {
  if (API.kind !== "success") {
    throw new Error(`Invalid test data:\n${API.errors.join("\n")}`);
  }
  expect(
    generateTypeScript(API.definedEndpoints, API.definedTypes, {
      client: {
        baseUrl: "https://api.test.com",
      },
    }),
  ).toEqual({
    kind: "directory",
    children: {
      "client.ts": {
        kind: "file",
        content: `import axios from "axios";
import * as api from "./api";

const URL = "https://api.test.com";

export async function createUser(request: api.CreateUserRequest): Promise<api.CreateUserResponse> {
  const url = \`\${URL}/users\`;
  const response = await axios({
    url,
    method: "POST",
    data: request,
  });
  return response.data;
}

export async function listUsers(headers: api.AuthOptional): Promise<api.ListUsersResponse> {
  const url = \`\${URL}/users\`;
  const response = await axios({
    url,
    method: "GET",
    headers,
  });
  return response.data;
}

export async function getUser(headers: api.AuthRequired, id: string): Promise<api.User> {
  const url = \`\${URL}/users/\${id}\`;
  const response = await axios({
    url,
    method: "GET",
    headers,
  });
  return response.data;
}

export async function deleteUser(headers: api.AuthRequired, id: string): Promise<void> {
  const url = \`\${URL}/users/\${id}\`;
  await axios({
    url,
    method: "DELETE",
    headers,
  });
}
`,
      },
      "api.ts": {
        kind: "file",
        content: `export interface CreateUserRequest {
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
`,
      },
    },
  });
});

test("generator with server", () => {
  if (API.kind !== "success") {
    throw new Error(`Invalid test data:\n${API.errors.join("\n")}`);
  }
  expect(
    generateTypeScript(API.definedEndpoints, API.definedTypes, {
      server: {},
    }),
  ).toEqual({
    kind: "directory",
    children: {
      "server.ts": {
        kind: "file",
        content: `import express from "express";
import * as api from "./api";
import { createUser } from "./endpoints/createUser";
import { listUsers } from "./endpoints/listUsers";
import { getUser } from "./endpoints/getUser";
import { deleteUser } from "./endpoints/deleteUser";

const PORT = 3010;

const app = express();

app.post("/users", async (req, res, next) => {
  try {
    const request: api.CreateUserRequest = req.body;
    const response: api.CreateUserResponse = await createUser(request);
    res.json(response);
  } catch (err) {
    next(err);
  }
});

app.get("/users", async (req, res, next) => {
  try {
    const headers: api.AuthOptional = {
      Authorization: req.header("Authorization"),
    };
    const response: api.ListUsersResponse = await listUsers(headers);
    res.json(response);
  } catch (err) {
    next(err);
  }
});

app.get("/users/:id", async (req, res, next) => {
  try {
    const headers: api.AuthRequired = {
      Authorization: req.header("Authorization") || "",
    };
    const id = req.params["id"];
    const response: api.User = await getUser(headers, id);
    res.json(response);
  } catch (err) {
    next(err);
  }
});

app.delete("/users/:id", async (req, res, next) => {
  try {
    const headers: api.AuthRequired = {
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
`,
      },
      "api.ts": {
        kind: "file",
        content: `export interface CreateUserRequest {
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
`,
      },
      "endpoints": {
        children: {
          "createUser.ts": {
            content: `import { CreateUserRequest, CreateUserResponse } from "../api";

export async function createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
  throw new Error("Unimplemented.");
}
`,
            doNotOverride: true,
            kind: "file",
          },
          "deleteUser.ts": {
            content: `import { AuthRequired } from "../api";

export async function deleteUser(headers: AuthRequired, id: string): Promise<void> {
  throw new Error("Unimplemented.");
}
`,
            doNotOverride: true,
            kind: "file",
          },
          "getUser.ts": {
            content: `import { AuthRequired, User } from "../api";

export async function getUser(headers: AuthRequired, id: string): Promise<User> {
  throw new Error("Unimplemented.");
}
`,
            doNotOverride: true,
            kind: "file",
          },
          "listUsers.ts": {
            content: `import { AuthOptional, ListUsersResponse } from "../api";

export async function listUsers(headers: AuthOptional): Promise<ListUsersResponse> {
  throw new Error("Unimplemented.");
}
`,
            doNotOverride: true,
            kind: "file",
          },
        },
        kind: "directory",
      },
    },
  });
});

function compile(source: string) {
  const defaultCompilerHost = ts.createCompilerHost({});
  const tsProgram = ts.createProgram(
    ["source.ts"],
    {
      strict: true,
      lib: ["es6"],
    },
    {
      ...defaultCompilerHost,
      getSourceFile(
        fileName: string,
        languageVersion: ts.ScriptTarget,
        onError?: (message: string) => void,
      ): ts.SourceFile | undefined {
        if (fileName === "source.ts") {
          return ts.createSourceFile(fileName, source, languageVersion);
        } else {
          return defaultCompilerHost.getSourceFile(
            fileName,
            languageVersion,
            onError,
          );
        }
      },
      fileExists: (fileName: string) =>
        fileName === "source.ts" || defaultCompilerHost.fileExists(fileName),
      readFile: (fileName: string) =>
        fileName === "source.ts"
          ? source
          : defaultCompilerHost.readFile(fileName),
    },
  );
  const diagnostics = ts.getPreEmitDiagnostics(tsProgram);
  const errors = diagnostics
    .filter((diagnostic) => {
      return diagnostic.file && diagnostic.file.fileName === "source.ts";
    })
    .map((diagnostic) => {
      if (typeof diagnostic.messageText === "string") {
        return diagnostic.messageText;
      } else {
        return diagnostic.messageText.messageText;
      }
    });
  const transpiled = ts.transpileModule(source, {}).outputText;
  return {
    transpiled,
    errors,
  };
}
