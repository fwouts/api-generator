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
    const request: null = req.body;
    const response: ListUsersResponse = await listUsers(request);
    res.json(response);
  } catch (err) {
    next(err);
  }
});

app.get("/users/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const request: null = req.body;
    const response: User = await getUser(id, request);
    res.json(response);
  } catch (err) {
    next(err);
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

export interface CreateUserRequest {
  name: string;
  password: string;
  roles: string[];
}

export type CreateUserResponse =
  | {
      status: "error";
      message: string;
    }
  | {
      status: "success";
      id: string;
      info: {
        name: string;
      };
    };

export type ListUsersResponse = User[];

export interface User {
  name: string;
}
