import axios from "axios";

export async function createUser(
  request: CreateUserRequest,
): Promise<CreateUserResponse> {
  const url = `https://api.test.com/users`;
  const response = await axios.get(url, {
    data: request,
  });
  return response.data;
}

export async function listUsers(): Promise<ListUsersResponse> {
  const url = `https://api.test.com/users`;
  const response = await axios.get(url);
  return response.data;
}

export async function getUser(id: string): Promise<User> {
  const url = `https://api.test.com/users/${id}`;
  const response = await axios.get(url);
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
