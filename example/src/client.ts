import axios, { AxiosError } from "axios";
import * as api from "./api";
import * as validation from "./validation";

const URL = "https://api.test.com";

// start-generated-section endpoints
export async function createUser(request: api.CreateUserRequest): Promise<api.CreateUser_Response> {
  if (!validation.validate_CreateUserRequest(request)) {
    throw new Error(`Invalid request: ${JSON.stringify(request, null, 2)}`);
  }
  const url = `${URL}/users`;
  let data: any;
  let statusCode: number;
  let statusText: string;
  try {
    const response = await axios({
      url,
      method: "POST",
      responseType: "json",
      data: request,
    });
    data = response.data;
    statusCode = response.status;
    statusText = response.statusText;
  } catch (e) {
    const axiosError = e as AxiosError;
    if (axiosError.response) {
      data = axiosError.response.data;
      statusCode = axiosError.response.status;
      statusText = axiosError.response.statusText;
    } else {
      statusCode = 503;
      statusText = axiosError.code || axiosError.message;
    }
  }
  switch (statusCode) {
    case 200:
      if (!validation.validate_CreateUserResponse(data)) {
        throw new Error(`Invalid response: ${JSON.stringify(data, null, 2)}`);
      }
      return {
        kind: "success",
        data,
      };
    case 400:
      if (!validation.validate_string(data)) {
        throw new Error(`Invalid response: ${JSON.stringify(data, null, 2)}`);
      }
      return {
        kind: "failure",
        data,
      };
    default:
      throw new Error(`Unexpected status: ${statusCode} ${statusText}`);
  }
}

export async function listUsers(headers: api.AuthRequired): Promise<api.ListUsers_Response> {
  if (!validation.validate_AuthRequired(headers)) {
    throw new Error(`Invalid headers: ${JSON.stringify(headers, null, 2)}`);
  }
  const url = `${URL}/users`;
  let data: any;
  let statusCode: number;
  let statusText: string;
  try {
    const response = await axios({
      url,
      method: "GET",
      responseType: "json",
      headers,
    });
    data = response.data;
    statusCode = response.status;
    statusText = response.statusText;
  } catch (e) {
    const axiosError = e as AxiosError;
    if (axiosError.response) {
      data = axiosError.response.data;
      statusCode = axiosError.response.status;
      statusText = axiosError.response.statusText;
    } else {
      statusCode = 503;
      statusText = axiosError.code || axiosError.message;
    }
  }
  switch (statusCode) {
    case 200:
      if (!validation.validate_ListUsersResponse(data)) {
        throw new Error(`Invalid response: ${JSON.stringify(data, null, 2)}`);
      }
      return {
        kind: "success",
        data,
      };
    case 403:
      if (!validation.validate_string(data)) {
        throw new Error(`Invalid response: ${JSON.stringify(data, null, 2)}`);
      }
      return {
        kind: "failure",
        data,
      };
    default:
      throw new Error(`Unexpected status: ${statusCode} ${statusText}`);
  }
}

export async function getUser(headers: api.AuthRequired, id: string): Promise<api.GetUser_Response> {
  if (!validation.validate_AuthRequired(headers)) {
    throw new Error(`Invalid headers: ${JSON.stringify(headers, null, 2)}`);
  }
  const url = `${URL}/users/${id}`;
  let data: any;
  let statusCode: number;
  let statusText: string;
  try {
    const response = await axios({
      url,
      method: "GET",
      responseType: "json",
      headers,
    });
    data = response.data;
    statusCode = response.status;
    statusText = response.statusText;
  } catch (e) {
    const axiosError = e as AxiosError;
    if (axiosError.response) {
      data = axiosError.response.data;
      statusCode = axiosError.response.status;
      statusText = axiosError.response.statusText;
    } else {
      statusCode = 503;
      statusText = axiosError.code || axiosError.message;
    }
  }
  switch (statusCode) {
    case 200:
      if (!validation.validate_User(data)) {
        throw new Error(`Invalid response: ${JSON.stringify(data, null, 2)}`);
      }
      return {
        kind: "success",
        data,
      };
    case 403:
      if (!validation.validate_string(data)) {
        throw new Error(`Invalid response: ${JSON.stringify(data, null, 2)}`);
      }
      return {
        kind: "failure",
        data,
      };
    case 404:
      return {
        kind: "notfound",
      };
    default:
      throw new Error(`Unexpected status: ${statusCode} ${statusText}`);
  }
}
// end-generated-section endpoints
