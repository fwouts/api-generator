import axios from "axios";
import * as api from "./api";
import * as validation from "./validation";

const URL = "https://api.test.com";

export async function createUser(request: api.CreateUserRequest): Promise<api.CreateUserResponse> {
  if (!validation.validate_CreateUserRequest(request)) {
    throw new Error(`Invalid request: ${JSON.stringify(request, null, 2)}`);
  }
  const url = `${URL}/users`;
  const response = await axios({
    url,
    method: "POST",
    data: request,
  });
  if (!validation.validate_CreateUserResponse(response.data)) {
    throw new Error(`Invalid response: ${JSON.stringify(response.data, null, 2)}`);
  }
  return response.data;
}

export async function listUsers(headers: api.AuthRequired): Promise<api.ListUsersResponse> {
  if (!validation.validate_AuthRequired(headers)) {
    throw new Error(`Invalid headers: ${JSON.stringify(headers, null, 2)}`);
  }
  const url = `${URL}/users`;
  const response = await axios({
    url,
    method: "GET",
    headers,
  });
  if (!validation.validate_ListUsersResponse(response.data)) {
    throw new Error(`Invalid response: ${JSON.stringify(response.data, null, 2)}`);
  }
  return response.data;
}

export async function getUser(headers: api.AuthRequired, id: string): Promise<api.User> {
  if (!validation.validate_AuthRequired(headers)) {
    throw new Error(`Invalid headers: ${JSON.stringify(headers, null, 2)}`);
  }
  const url = `${URL}/users/${id}`;
  const response = await axios({
    url,
    method: "GET",
    headers,
  });
  if (!validation.validate_User(response.data)) {
    throw new Error(`Invalid response: ${JSON.stringify(response.data, null, 2)}`);
  }
  return response.data;
}
