import { CreateUserRequest, CreateUserResponse } from "../api";

export async function createUser(
  request: CreateUserRequest,
): Promise<CreateUserResponse> {
  return {
    id: "abc",
  };
}
