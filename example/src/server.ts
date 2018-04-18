import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import * as types from "./api/types";
import * as validators from "./api/validators";

// start-generated-section endpointImports
import { createUser } from "./endpoints/createUser";
import { getUser } from "./endpoints/getUser";
import { listUsers } from "./endpoints/listUsers";
// end-generated-section endpointImports

const PORT = 8080;

const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: (origin, callback) => {
      callback(null, true);
      // If you want to only allow some origins, use the following instead:
      // callback(new Error(`Access is not allowed from ${origin}.`));
    },
  }),
);

// start-generated-section httpHooks
app.post("/users", async (req, res, next) => {
  try {
    const request: types.CreateUserRequest = req.body;
    if (!validators.validate_CreateUserRequest(request)) {
      throw new Error(`Invalid request: ${JSON.stringify(request, null, 2)}`);
    }
    const response: types.CreateUser_Response = await createUser(request);
    switch (response.kind) {
      case "success":
        if (!validators.validate_CreateUserResponse(response.data)) {
          throw new Error(`Invalid response: ${JSON.stringify(response, null, 2)}`);
        }
        res.status(200);
        res.json(response.data);
        break;
      case "failure":
        if (!validators.validate_string(response.data)) {
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
    const headers: types.AuthRequired = {
      Authorization: req.header("Authorization")!,
    };
    if (!validators.validate_AuthRequired(headers)) {
      throw new Error(`Invalid headers: ${JSON.stringify(headers, null, 2)}`);
    }
    const response: types.ListUsers_Response = await listUsers(headers);
    switch (response.kind) {
      case "success":
        if (!validators.validate_ListUsersResponse(response.data)) {
          throw new Error(`Invalid response: ${JSON.stringify(response, null, 2)}`);
        }
        res.status(200);
        res.json(response.data);
        break;
      case "failure":
        if (!validators.validate_string(response.data)) {
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
    const headers: types.AuthRequired = {
      Authorization: req.header("Authorization")!,
    };
    if (!validators.validate_AuthRequired(headers)) {
      throw new Error(`Invalid headers: ${JSON.stringify(headers, null, 2)}`);
    }
    const id = req.params.id;
    const response: types.GetUser_Response = await getUser(headers, id);
    switch (response.kind) {
      case "success":
        if (!validators.validate_User(response.data)) {
          throw new Error(`Invalid response: ${JSON.stringify(response, null, 2)}`);
        }
        res.status(200);
        res.json(response.data);
        break;
      case "failure":
        if (!validators.validate_string(response.data)) {
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
