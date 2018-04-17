import express from "express";
import * as api from "./api";
import * as validation from "./validation";

// start-generated-section endpointImports
import { createUser } from "./endpoints/createUser";
import { getUser } from "./endpoints/getUser";
import { listUsers } from "./endpoints/listUsers";
// end-generated-section endpointImports

const PORT = 8080;

const app = express();

// start-generated-section httpHooks
app.post("/users", async (req, res, next) => {
  try {
    const request: api.CreateUserRequest = req.body;
    if (!validation.validate_CreateUserRequest(request)) {
      throw new Error(`Invalid request: ${JSON.stringify(request, null, 2)}`);
    }
    const response: api.CreateUser_Response = await createUser(request);
    switch (response.kind) {
      case "success":
        if (!validation.validate_CreateUserResponse(response.data)) {
          throw new Error(`Invalid response: ${JSON.stringify(response, null, 2)}`);
        }
        res.status(200);
        res.json(response.data);
        break;
      case "failure":
        if (!validation.validate_string(response.data)) {
          throw new Error(`Invalid response: ${JSON.stringify(response, null, 2)}`);
        }
        res.status(400);
        res.json(response.data);
        break;
      default:
        throw new Error(`Invalid response: ${JSON.stringify(response, null, 2)}`);
    }
  } catch (err) {
    next(err);
  }
});

app.get("/users", async (req, res, next) => {
  try {
    const headers: api.AuthRequired = {
      Authorization: req.header("Authorization")!,
    };
    if (!validation.validate_AuthRequired(headers)) {
      throw new Error(`Invalid headers: ${JSON.stringify(headers, null, 2)}`);
    }
    const response: api.ListUsers_Response = await listUsers(headers);
    switch (response.kind) {
      case "success":
        if (!validation.validate_ListUsersResponse(response.data)) {
          throw new Error(`Invalid response: ${JSON.stringify(response, null, 2)}`);
        }
        res.status(200);
        res.json(response.data);
        break;
      case "failure":
        if (!validation.validate_string(response.data)) {
          throw new Error(`Invalid response: ${JSON.stringify(response, null, 2)}`);
        }
        res.status(403);
        res.json(response.data);
        break;
      default:
        throw new Error(`Invalid response: ${JSON.stringify(response, null, 2)}`);
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
      throw new Error(`Invalid headers: ${JSON.stringify(headers, null, 2)}`);
    }
    const id = req.params.id;
    const response: api.GetUser_Response = await getUser(headers, id);
    switch (response.kind) {
      case "success":
        if (!validation.validate_User(response.data)) {
          throw new Error(`Invalid response: ${JSON.stringify(response, null, 2)}`);
        }
        res.status(200);
        res.json(response.data);
        break;
      case "failure":
        if (!validation.validate_string(response.data)) {
          throw new Error(`Invalid response: ${JSON.stringify(response, null, 2)}`);
        }
        res.status(403);
        res.json(response.data);
        break;
      case "notfound":
        res.status(404);
        res.end();
        break;
      default:
        throw new Error(`Invalid response: ${JSON.stringify(response, null, 2)}`);
    }
  } catch (err) {
    next(err);
  }
});
// end-generated-section httpHooks

// tslint:disable-next-line no-console
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
