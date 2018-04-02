import express from "express";
import { createUser } from "./endpoints/createUser";
import { getUser } from "./endpoints/getUser";
import { listUsers } from "./endpoints/listUsers";

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
    const id = req.params.id;
    const response: User = await getUser(id);
    res.json(response);
  } catch (err) {
    next(err);
  }
});

// tslint:disable-next-line no-console
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

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
