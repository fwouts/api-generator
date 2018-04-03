import axios from "axios";
import * as api from "./api";

const URL = "https://api.test.com";

export async function createUser(request: api.CreateUserRequest): Promise<api.CreateUserResponse> {
  const url = `${URL}/users`;
  const response = await axios({
    url,
    method: "POST",
    data: request,
  });
  return response.data;
}

export async function listUsers(headers: api.AuthRequired): Promise<api.ListUsersResponse> {
  const url = `${URL}/users`;
  const response = await axios({
    url,
    method: "GET",
    headers,
  });
  return response.data;
}

export async function getUser(headers: api.AuthRequired, id: string): Promise<api.User> {
  const url = `${URL}/users/${id}`;
  const response = await axios({
    url,
    method: "GET",
    headers,
  });
  return response.data;
}
