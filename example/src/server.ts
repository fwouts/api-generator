import express from "express";

const PORT = 3010;

const app = express();

app.post("/users", (req, res) => {
  const request: CreateUserRequest = req.body;
  let response: CreateUserResponse;
  response = {
    id: "abc",
  };
  // TODO: Implement.
  res.json(response);
});

app.get("/users", (req, res) => {
  const request: null = req.body;
  let response: ListUsersResponse;
  // TODO: Implement.
  response = [];
  res.json(response);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const request: null = req.body;
  let response: User;
  // TODO: Implement.
  response = {
    name: id,
  };
  res.json(response);
});

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
