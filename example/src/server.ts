import express from "express";
import * as api from "./api";
import { createUser } from "./endpoints/createUser";
import { getUser } from "./endpoints/getUser";
import { listUsers } from "./endpoints/listUsers";
import * as validation from "./validation";

const PORT = 3010;

const app = express();

app.post("/users", async (req, res, next) => {
  try {
    const request: api.CreateUserRequest = req.body;
    if (!validation.validate_CreateUserRequest(request)) {
      throw new Error(`Invalid request: ${JSON.stringify(request, null, 2)}`);
    }
    const response: api.CreateUser_Response = await createUser(request);
    let statusCode: number;
    switch (response.kind) {
      case "success":
        if (!validation.validate_CreateUserResponse(response.data)) {
          throw new Error(`Invalid response: ${JSON.stringify(response, null, 2)}`);
        }
        statusCode = 200;
        break;
      case "failure":
        if (!validation.validate_string(response.data)) {
          throw new Error(`Invalid response: ${JSON.stringify(response, null, 2)}`);
        }
        statusCode = 400;
        break;
      default:
        throw new Error(`Invalid response: ${JSON.stringify(response, null, 2)}`);
    }
    res.status(statusCode).json(response);
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
    let statusCode: number;
    switch (response.kind) {
      case "success":
        if (!validation.validate_ListUsersResponse(response.data)) {
          throw new Error(`Invalid response: ${JSON.stringify(response, null, 2)}`);
        }
        statusCode = 200;
        break;
      case "failure":
        if (!validation.validate_string(response.data)) {
          throw new Error(`Invalid response: ${JSON.stringify(response, null, 2)}`);
        }
        statusCode = 403;
        break;
      default:
        throw new Error(`Invalid response: ${JSON.stringify(response, null, 2)}`);
    }
    res.status(statusCode).json(response);
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
    let statusCode: number;
    switch (response.kind) {
      case "success":
        if (!validation.validate_User(response.data)) {
          throw new Error(`Invalid response: ${JSON.stringify(response, null, 2)}`);
        }
        statusCode = 200;
        break;
      case "failure":
        if (!validation.validate_string(response.data)) {
          throw new Error(`Invalid response: ${JSON.stringify(response, null, 2)}`);
        }
        statusCode = 403;
        break;
      case "notfound":
        statusCode = 404;
        break;
      default:
        throw new Error(`Invalid response: ${JSON.stringify(response, null, 2)}`);
    }
    res.status(statusCode).json(response);
  } catch (err) {
    next(err);
  }
});

// tslint:disable-next-line no-console
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
