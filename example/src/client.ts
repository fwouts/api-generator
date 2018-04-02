import axios from "axios";

const URL = "https://api.test.com";

export async function createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
  const url = `${URL}/users`;
  const response = await axios({
    url,
    method: "POST",
    data: request,
  });
  return response.data;
}

export async function listUsers(headers: AuthRequired): Promise<ListUsersResponse> {
  const url = `${URL}/users`;
  const response = await axios({
    url,
    method: "GET",
    headers,
  });
  return response.data;
}

export async function getUser(headers: AuthRequired, id: string): Promise<User> {
  const url = `${URL}/users/${id}`;
  const response = await axios({
    url,
    method: "GET",
    headers,
  });
  return response.data;
}

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

export interface AuthRequired {
  Authorization: string;
}
