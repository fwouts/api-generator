import fs from "fs-extra";
import "jest";
import path from "path";
import ts from "typescript";
import { parse } from "../parser";
import { EndpointDefinitions, resolve, TypeDefinitions } from "../resolver";
import { Directory, input, output } from "./io";
import { GenerateOptions, generateTypeScript } from "./typescript";

beforeAll(() => {
  fs.removeSync("test-output");
  fs.mkdirSync("test-output");
});

afterAll(() => {
  fs.removeSync("test-output");
});

// IMPORTANT NOTE: Jest gets stuck indefinitely when a string containing "import ... from"
// appears in our code. That's why we hack around it by using `${"from"}` instead of "from".

const API = resolve(
  parse(`
endpoint createUser: POST /users CreateUserRequest
-> success 200 CreateUserResponseSuccess
-> failure 400 string

type CreateUserRequest = {
  name: string
  password?: string
  roles: Role[]
}

type Role = @user | @admin;

type CreateUserResponseSuccess = {
  id: string
  info: {
    name: string
  }
}

@headers(AuthOptional)
endpoint listUsers: GET /users void
-> success 200 ListUsersResponse
-> failure 403 string

type ListUsersResponse = User[]

@headers(AuthRequired)
endpoint getUser: GET /users/:id void
-> success 200 User
-> failure 403 string

type User = {
  name: string
}

@headers(AuthRequired)
endpoint deleteUser: DELETE /users/:id void
-> success 200 void
-> failure 403 string

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
    generateTypeScriptWrapped(API.definedEndpoints, API.definedTypes),
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

export interface CreateUserResponseSuccess {
  id: string;
  info: {
    name: string;
  };
}

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

export type CreateUser_Response = {
  kind: 'success';
  data: CreateUserResponseSuccess;
} | {
  kind: 'failure';
  data: string;
};

export type ListUsers_Response = {
  kind: 'success';
  data: ListUsersResponse;
} | {
  kind: 'failure';
  data: string;
};

export type GetUser_Response = {
  kind: 'success';
  data: User;
} | {
  kind: 'failure';
  data: string;
};

export type DeleteUser_Response = {
  kind: 'success';
} | {
  kind: 'failure';
  data: string;
};
`,
      },
    },
  });
});

test("generator creates enforceable types", () => {
  if (API.kind !== "success") {
    throw new Error(`Invalid test data:\n${API.errors.join("\n")}`);
  }
  const generated = generateTypeScriptWrapped(
    API.definedEndpoints,
    API.definedTypes,
  );
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

    let responseMissingMessage: CreateUser_Response = {
      kind: "failure",
    };
  `;
  const { errors } = compile({
    "source.ts": testSource,
  });
  expect(errors).toEqual([
    "source.ts: Type '{ name: string; }' is not assignable to type 'CreateUserRequest'.",
    "source.ts: Type '{ kind: \"failure\"; }' is not assignable to type 'CreateUser_Response'.",
  ]);
});

test("generator creates valid type checkers", () => {
  if (API.kind !== "success") {
    throw new Error(`Invalid test data:\n${API.errors.join("\n")}`);
  }
  const generated = generateTypeScriptWrapped(
    API.definedEndpoints,
    API.definedTypes,
  );
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
  kind: "failure",
  data: "blah",
};

let validResponse2 = {
  kind: "success",
  data: {
    id: "abc",
    info: {
      name: "Hector",
    },
  },
};

let invalidResponse1 = {
  kind: "failure",
};

let invalidResponse2 = {
  kind: "success",
  data: {
    id: "abc",
    info: {
      name: 123,
    },
  },
};

expect(validation.validate_CreateUserRequest(validRequest1)).toBe(true);
expect(validation.validate_CreateUserRequest(validRequest2)).toBe(true);
expect(validation.validate_CreateUserRequest(invalidRequest1)).toBe(false);
expect(validation.validate_CreateUserRequest(invalidRequest2)).toBe(false);
expect(validation.validate_CreateUser_Response(validResponse1)).toBe(true);
expect(validation.validate_CreateUser_Response(validResponse2)).toBe(true);
expect(validation.validate_CreateUser_Response(invalidResponse1)).toBe(false);
expect(validation.validate_CreateUser_Response(invalidResponse2)).toBe(false);
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
    generateTypeScriptWrapped(API.definedEndpoints, API.definedTypes, {
      client: {
        baseUrl: "https://api.test.com",
      },
    }),
  ).toMatchObject({
    kind: "directory",
    children: {
      "client.ts": {
        kind: "file",
        content: `import axios, { AxiosError } from \"axios\";
import * as api from \"./api\";
import * as validation from \"./validation\";

const URL = \"https://api.test.com\";

// start-generated-section endpoints
export async function createUser(request: api.CreateUserRequest): Promise<api.CreateUser_Response> {
  if (!validation.validate_CreateUserRequest(request)) {
    throw new Error(\`Invalid request: \${JSON.stringify(request, null, 2)}\`);
  }
  const url = \`\${URL}/users\`;
  let data: any;
  let statusCode: number;
  let statusText: string;
  try {
    const response = await axios({
      url,
      method: \"POST\",
      responseType: \"json\",
      data: request,
    });
    data = response.data;
    statusCode = response.status;
    statusText = response.statusText;
  } catch (e) {
    const axiosError = e as AxiosError;
    if (axiosError.response) {
      data = axiosError.response.data;
      statusCode = axiosError.response.status;
      statusText = axiosError.response.statusText;
    } else {
      statusCode = 503;
      statusText = axiosError.code || axiosError.message;
    }
  }
  switch (statusCode) {
    case 200:
      if (!validation.validate_CreateUserResponseSuccess(data)) {
        throw new Error(\`Invalid response: \${JSON.stringify(data, null, 2)}\`);
      }
      return {
        kind: "success",
        data,
      };
    case 400:
      if (!validation.validate_string(data)) {
        throw new Error(\`Invalid response: \${JSON.stringify(data, null, 2)}\`);
      }
      return {
        kind: "failure",
        data,
      };
    default:
      throw new Error(\`Unexpected status: \${statusCode} \${statusText}\`);
  }
}

export async function listUsers(headers: api.AuthOptional): Promise<api.ListUsers_Response> {
  if (!validation.validate_AuthOptional(headers)) {
    throw new Error(\`Invalid headers: \${JSON.stringify(headers, null, 2)}\`);
  }
  const url = \`\${URL}/users\`;
  let data: any;
  let statusCode: number;
  let statusText: string;
  try {
    const response = await axios({
      url,
      method: \"GET\",
      responseType: \"json\",
      headers,
    });
    data = response.data;
    statusCode = response.status;
    statusText = response.statusText;
  } catch (e) {
    const axiosError = e as AxiosError;
    if (axiosError.response) {
      data = axiosError.response.data;
      statusCode = axiosError.response.status;
      statusText = axiosError.response.statusText;
    } else {
      statusCode = 503;
      statusText = axiosError.code || axiosError.message;
    }
  }
  switch (statusCode) {
    case 200:
      if (!validation.validate_ListUsersResponse(data)) {
        throw new Error(\`Invalid response: \${JSON.stringify(data, null, 2)}\`);
      }
      return {
        kind: "success",
        data,
      };
    case 403:
      if (!validation.validate_string(data)) {
        throw new Error(\`Invalid response: \${JSON.stringify(data, null, 2)}\`);
      }
      return {
        kind: "failure",
        data,
      };
    default:
      throw new Error(\`Unexpected status: \${statusCode} \${statusText}\`);
  }
}

export async function getUser(headers: api.AuthRequired, id: string): Promise<api.GetUser_Response> {
  if (!validation.validate_AuthRequired(headers)) {
    throw new Error(\`Invalid headers: \${JSON.stringify(headers, null, 2)}\`);
  }
  const url = \`\${URL}/users/\${id}\`;
  let data: any;
  let statusCode: number;
  let statusText: string;
  try {
    const response = await axios({
      url,
      method: \"GET\",
      responseType: \"json\",
      headers,
    });
    data = response.data;
    statusCode = response.status;
    statusText = response.statusText;
  } catch (e) {
    const axiosError = e as AxiosError;
    if (axiosError.response) {
      data = axiosError.response.data;
      statusCode = axiosError.response.status;
      statusText = axiosError.response.statusText;
    } else {
      statusCode = 503;
      statusText = axiosError.code || axiosError.message;
    }
  }
  switch (statusCode) {
    case 200:
      if (!validation.validate_User(data)) {
        throw new Error(\`Invalid response: \${JSON.stringify(data, null, 2)}\`);
      }
      return {
        kind: "success",
        data,
      };
    case 403:
      if (!validation.validate_string(data)) {
        throw new Error(\`Invalid response: \${JSON.stringify(data, null, 2)}\`);
      }
      return {
        kind: "failure",
        data,
      };
    default:
      throw new Error(\`Unexpected status: \${statusCode} \${statusText}\`);
  }
}

export async function deleteUser(headers: api.AuthRequired, id: string): Promise<api.DeleteUser_Response> {
  if (!validation.validate_AuthRequired(headers)) {
    throw new Error(\`Invalid headers: \${JSON.stringify(headers, null, 2)}\`);
  }
  const url = \`\${URL}/users/\${id}\`;
  let data: any;
  let statusCode: number;
  let statusText: string;
  try {
    const response = await axios({
      url,
      method: \"DELETE\",
      responseType: \"json\",
      headers,
    });
    data = response.data;
    statusCode = response.status;
    statusText = response.statusText;
  } catch (e) {
    const axiosError = e as AxiosError;
    if (axiosError.response) {
      data = axiosError.response.data;
      statusCode = axiosError.response.status;
      statusText = axiosError.response.statusText;
    } else {
      statusCode = 503;
      statusText = axiosError.code || axiosError.message;
    }
  }
  switch (statusCode) {
    case 200:
      return {
        kind: "success",
      };
    case 403:
      if (!validation.validate_string(data)) {
        throw new Error(\`Invalid response: \${JSON.stringify(data, null, 2)}\`);
      }
      return {
        kind: "failure",
        data,
      };
    default:
      throw new Error(\`Unexpected status: \${statusCode} \${statusText}\`);
  }
}
// end-generated-section endpoints
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
    generateTypeScriptWrapped(API.definedEndpoints, API.definedTypes, {
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

// start-generated-section endpointImports
import { createUser } from "./endpoints/createUser";
import { listUsers } from "./endpoints/listUsers";
import { getUser } from "./endpoints/getUser";
import { deleteUser } from "./endpoints/deleteUser";
// end-generated-section endpointImports

const PORT = 3010;

const app = express();

// start-generated-section httpHooks
app.post("/users", async (req, res, next) => {
  try {
    const request: api.CreateUserRequest = req.body;
    if (!validation.validate_CreateUserRequest(request)) {
      throw new Error(\`Invalid request: \${JSON.stringify(request, null, 2)}\`);
    }
    const response: api.CreateUser_Response = await createUser(request);
    switch (response.kind) {
      case \"success\":
        if (!validation.validate_CreateUserResponseSuccess(response.data)) {
          throw new Error(\`Invalid response: \${JSON.stringify(response, null, 2)}\`);
        }
        res.status(200);
        res.json(response.data);
        break;
      case \"failure\":
        if (!validation.validate_string(response.data)) {
          throw new Error(\`Invalid response: \${JSON.stringify(response, null, 2)}\`);
        }
        res.status(400);
        res.json(response.data);
        break;
      default:
        throw new Error(\`Invalid response: \${JSON.stringify(response, null, 2)}\`);
    }
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
    const response: api.ListUsers_Response = await listUsers(headers);
    switch (response.kind) {
      case \"success\":
        if (!validation.validate_ListUsersResponse(response.data)) {
          throw new Error(\`Invalid response: \${JSON.stringify(response, null, 2)}\`);
        }
        res.status(200);
        res.json(response.data);
        break;
      case \"failure\":
        if (!validation.validate_string(response.data)) {
          throw new Error(\`Invalid response: \${JSON.stringify(response, null, 2)}\`);
        }
        res.status(403);
        res.json(response.data);
        break;
      default:
        throw new Error(\`Invalid response: \${JSON.stringify(response, null, 2)}\`);
    }
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
    const response: api.GetUser_Response = await getUser(headers, id);
    switch (response.kind) {
      case \"success\":
        if (!validation.validate_User(response.data)) {
          throw new Error(\`Invalid response: \${JSON.stringify(response, null, 2)}\`);
        }
        res.status(200);
        res.json(response.data);
        break;
      case \"failure\":
        if (!validation.validate_string(response.data)) {
          throw new Error(\`Invalid response: \${JSON.stringify(response, null, 2)}\`);
        }
        res.status(403);
        res.json(response.data);
        break;
      default:
        throw new Error(\`Invalid response: \${JSON.stringify(response, null, 2)}\`);
    }
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
    const response: api.DeleteUser_Response = await deleteUser(headers, id);
    switch (response.kind) {
      case \"success\":
        res.status(200);
        res.end();
        break;
      case \"failure\":
        if (!validation.validate_string(response.data)) {
          throw new Error(\`Invalid response: \${JSON.stringify(response, null, 2)}\`);
        }
        res.status(403);
        res.json(response.data);
        break;
      default:
        throw new Error(\`Invalid response: \${JSON.stringify(response, null, 2)}\`);
    }
  } catch (err) {
    next(err);
  }
});
// end-generated-section httpHooks

// tslint:disable-next-line no-console
app.listen(PORT, () => console.log(\`Listening on port \${PORT}\`));
`,
      },
      "endpoints": {
        children: {
          "createUser.ts": {
            content: `import { CreateUserRequest, CreateUser_Response } from "../api";

export async function createUser(request: CreateUserRequest): Promise<CreateUser_Response> {
  throw new Error("Unimplemented.");
}
`,
            kind: "file",
          },
          "deleteUser.ts": {
            content: `import { AuthRequired, DeleteUser_Response } from "../api";

export async function deleteUser(headers: AuthRequired, id: string): Promise<DeleteUser_Response> {
  throw new Error("Unimplemented.");
}
`,
            kind: "file",
          },
          "getUser.ts": {
            content: `import { AuthRequired, GetUser_Response } from "../api";

export async function getUser(headers: AuthRequired, id: string): Promise<GetUser_Response> {
  throw new Error("Unimplemented.");
}
`,
            kind: "file",
          },
          "listUsers.ts": {
            content: `import { AuthOptional, ListUsers_Response } from "../api";

export async function listUsers(headers: AuthOptional): Promise<ListUsers_Response> {
  throw new Error("Unimplemented.");
}
`,
            kind: "file",
          },
        },
        kind: "directory",
      },
    },
  });
});

function generateTypeScriptWrapped(
  endpointDefinitions: EndpointDefinitions,
  typeDefinitions: TypeDefinitions,
  options?: GenerateOptions,
) {
  const directory = generateTypeScript(
    endpointDefinitions,
    typeDefinitions,
    options,
  );
  output(directory, "test-output");
  return input("test-output") as Directory;
}

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
    target: ts.ScriptTarget.ES2015,
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
