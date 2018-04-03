import express from "express";
import * as api from "./api";
import { createUser } from "./endpoints/createUser";
import { getUser } from "./endpoints/getUser";
import { listUsers } from "./endpoints/listUsers";

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
    const headers: api.AuthRequired = {
      Authorization: req.header("Authorization") || "",
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
    const id = req.params.id;
    const response: api.User = await getUser(headers, id);
    res.json(response);
  } catch (err) {
    next(err);
  }
});

// tslint:disable-next-line no-console
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
