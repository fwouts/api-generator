import fs from "fs-extra";
import "jest";
import path from "path";
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
  roles: Role[]
}

type Role = @user | @admin;

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
  expect(
    generateTypeScript(API.definedEndpoints, API.definedTypes),
  ).toMatchObject({
    kind: "directory",
    children: {
      "api.ts": {
        kind: "file",
        content: `export interface CreateUserRequest {
  name: string;
  password?: string;
  roles: Role[];
}

export type Role = 'user' | 'admin';

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
  const { errors } = compile({
    "source.ts": testSource,
  });
  expect(errors).toEqual([
    "source.ts: Type '{ name: string; }' is not assignable to type 'CreateUserRequest'.",
    "source.ts: Type '{ status: \"error\"; }' is not assignable to type 'CreateUserResponse'.",
  ]);
});

test("generator creates valid type checkers", () => {
  if (API.kind !== "success") {
    throw new Error(`Invalid test data:\n${API.errors.join("\n")}`);
  }
  const generated = generateTypeScript(API.definedEndpoints, API.definedTypes);
  const apiSourceFile = generated.children["api.ts"];
  expect(apiSourceFile).toBeTruthy();
  if (apiSourceFile.kind !== "file") {
    throw expect(apiSourceFile.kind).toEqual("file");
  }
  const validationSourceFile = generated.children["validation.ts"];
  expect(validationSourceFile).toBeTruthy();
  if (validationSourceFile.kind !== "file") {
    throw expect(validationSourceFile.kind).toEqual("file");
  }
  const { errors, transpiled } = compile({
    "api.ts": apiSourceFile.content,
    "validation.ts": validationSourceFile.content,
    "test.ts": `import * as validation from './validation';

let validRequest1 = {
  name: "Hello",
  roles: [],
};

let validRequest2 = {
  name: "Hello",
  roles: ['user', 'admin'],
};

let invalidRequest1 = {
  name: "test",
};

let invalidRequest2 = {
  name: "test",
  roles: ['other'],
};

let validResponse1 = {
  status: "error",
  message: "blah",
};

let validResponse2 = {
  status: "success",
  id: "abc",
  info: {
    name: "Hector",
  },
};

let invalidResponse1 = {
  status: "error",
};

let invalidResponse2 = {
  status: "success",
  id: "abc",
  info: {
    name: 123,
  },
};

expect(validation.validate_CreateUserRequest(validRequest1)).toBe(true);
expect(validation.validate_CreateUserRequest(validRequest2)).toBe(true);
expect(validation.validate_CreateUserRequest(invalidRequest1)).toBe(false);
expect(validation.validate_CreateUserRequest(invalidRequest2)).toBe(false);
expect(validation.validate_CreateUserResponse(validResponse1)).toBe(true);
expect(validation.validate_CreateUserResponse(validResponse2)).toBe(true);
expect(validation.validate_CreateUserResponse(invalidResponse1)).toBe(false);
expect(validation.validate_CreateUserResponse(invalidResponse2)).toBe(false);
`,
  });
  expect(errors).toEqual([]);

  // This is a fun little hack. We transpile the code above and evaluate it as a test.
  try {
    fs.writeFileSync(path.join(__dirname, "api.ts"), apiSourceFile.content);
    fs.writeFileSync(
      path.join(__dirname, "validation.ts"),
      validationSourceFile.content,
    );
    // tslint:disable-next-line no-eval
    eval(transpiled["test.ts"]);
  } finally {
    fs.unlinkSync(path.join(__dirname, "validation.ts"));
    fs.unlinkSync(path.join(__dirname, "api.ts"));
  }
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
  ).toMatchObject({
    kind: "directory",
    children: {
      "client.ts": {
        kind: "file",
        content: `import axios from "axios";
import * as api from "./api";
import * as validation from "./validation";

const URL = "https://api.test.com";

export async function createUser(request: api.CreateUserRequest): Promise<api.CreateUserResponse> {
  if (!validation.validate_CreateUserRequest(request)) {
    throw new Error(\`Invalid request: \${JSON.stringify(request, null, 2)}\`);
  }
  const url = \`\${URL}/users\`;
  const response = await axios({
    url,
    method: "POST",
    data: request,
  });
  if (!validation.validate_CreateUserResponse(response.data)) {
    throw new Error(\`Invalid response: \${JSON.stringify(response.data, null, 2)}\`);
  }
  return response.data;
}

export async function listUsers(headers: api.AuthOptional): Promise<api.ListUsersResponse> {
  if (!validation.validate_AuthOptional(headers)) {
    throw new Error(\`Invalid headers: \${JSON.stringify(headers, null, 2)}\`);
  }
  const url = \`\${URL}/users\`;
  const response = await axios({
    url,
    method: "GET",
    headers,
  });
  if (!validation.validate_ListUsersResponse(response.data)) {
    throw new Error(\`Invalid response: \${JSON.stringify(response.data, null, 2)}\`);
  }
  return response.data;
}

export async function getUser(headers: api.AuthRequired, id: string): Promise<api.User> {
  if (!validation.validate_AuthRequired(headers)) {
    throw new Error(\`Invalid headers: \${JSON.stringify(headers, null, 2)}\`);
  }
  const url = \`\${URL}/users/\${id}\`;
  const response = await axios({
    url,
    method: "GET",
    headers,
  });
  if (!validation.validate_User(response.data)) {
    throw new Error(\`Invalid response: \${JSON.stringify(response.data, null, 2)}\`);
  }
  return response.data;
}

export async function deleteUser(headers: api.AuthRequired, id: string): Promise<void> {
  if (!validation.validate_AuthRequired(headers)) {
    throw new Error(\`Invalid headers: \${JSON.stringify(headers, null, 2)}\`);
  }
  const url = \`\${URL}/users/\${id}\`;
  await axios({
    url,
    method: "DELETE",
    headers,
  });
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
  ).toMatchObject({
    kind: "directory",
    children: {
      "server.ts": {
        kind: "file",
        content: `import express from "express";
import * as api from "./api";
import * as validation from "./validation";
import { createUser } from "./endpoints/createUser";
import { listUsers } from "./endpoints/listUsers";
import { getUser } from "./endpoints/getUser";
import { deleteUser } from "./endpoints/deleteUser";

const PORT = 3010;

const app = express();

app.post("/users", async (req, res, next) => {
  try {
    const request: api.CreateUserRequest = req.body;
    if (!validation.validate_CreateUserRequest(request)) {
      throw new Error(\`Invalid request: \${JSON.stringify(request, null, 2)}\`);
    }
    const response: api.CreateUserResponse = await createUser(request);
    if (!validation.validate_CreateUserResponse(response)) {
      throw new Error(\`Invalid response: \${JSON.stringify(response, null, 2)}\`);
    }
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
    if (!validation.validate_AuthOptional(headers)) {
      throw new Error(\`Invalid headers: \${JSON.stringify(headers, null, 2)}\`);
    }
    const response: api.ListUsersResponse = await listUsers(headers);
    if (!validation.validate_ListUsersResponse(response)) {
      throw new Error(\`Invalid response: \${JSON.stringify(response, null, 2)}\`);
    }
    res.json(response);
  } catch (err) {
    next(err);
  }
});

app.get("/users/:id", async (req, res, next) => {
  try {
    const headers: api.AuthRequired = {
      Authorization: req.header("Authorization")!,
    };
    if (!validation.validate_AuthRequired(headers)) {
      throw new Error(\`Invalid headers: \${JSON.stringify(headers, null, 2)}\`);
    }
    const id = req.params["id"];
    const response: api.User = await getUser(headers, id);
    if (!validation.validate_User(response)) {
      throw new Error(\`Invalid response: \${JSON.stringify(response, null, 2)}\`);
    }
    res.json(response);
  } catch (err) {
    next(err);
  }
});

app.delete("/users/:id", async (req, res, next) => {
  try {
    const headers: api.AuthRequired = {
      Authorization: req.header("Authorization")!,
    };
    if (!validation.validate_AuthRequired(headers)) {
      throw new Error(\`Invalid headers: \${JSON.stringify(headers, null, 2)}\`);
    }
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

function compile(sources: {
  [name: string]: string;
}): {
  transpiled: { [name: string]: string };
  errors: string[];
} {
  const cwd = process.cwd() + "/";
  const compilerOptions: ts.CompilerOptions = {
    strict: true,
    module: ts.ModuleKind.CommonJS,
    baseUrl: "./",
  };
  const defaultCompilerHost = ts.createCompilerHost(compilerOptions);
  const tsProgram = ts.createProgram(Object.keys(sources), compilerOptions, {
    ...defaultCompilerHost,
    getSourceFile(
      fileName: string,
      languageVersion: ts.ScriptTarget,
      onError?: (message: string) => void,
    ): ts.SourceFile | undefined {
      if (fileName.startsWith(cwd)) {
        fileName = fileName.substr(cwd.length);
      }
      if (fileName in sources) {
        return ts.createSourceFile(
          fileName,
          sources[fileName],
          languageVersion,
        );
      } else {
        return defaultCompilerHost.getSourceFile(
          fileName,
          languageVersion,
          onError,
        );
      }
    },
    fileExists: (fileName: string) => {
      if (fileName.startsWith(cwd)) {
        fileName = fileName.substr(cwd.length);
      }
      return fileName in sources || defaultCompilerHost.fileExists(fileName);
    },
    readFile: (fileName: string) => {
      if (fileName.startsWith(cwd)) {
        fileName = fileName.substr(cwd.length);
      }
      return fileName in sources
        ? sources[fileName]
        : defaultCompilerHost.readFile(fileName);
    },
  });
  const diagnostics = ts.getPreEmitDiagnostics(tsProgram);
  const errors = diagnostics
    .filter((diagnostic) => {
      return diagnostic.file && diagnostic.file.fileName in sources;
    })
    .map((diagnostic) => {
      if (typeof diagnostic.messageText === "string") {
        return `${diagnostic.file!.fileName}: ${diagnostic.messageText}`;
      } else {
        return `${diagnostic.file!.fileName}: ${
          diagnostic.messageText.messageText
        }`;
      }
    });
  const transpiled = Object.entries(sources)
    .map(([name, source]) => [name, ts.transpileModule(source, {}).outputText])
    .reduce((acc, [name, transpiledSource]) => {
      return {
        ...acc,
        [name]: transpiledSource,
      };
    }, {});
  return {
    transpiled,
    errors,
  };
}
