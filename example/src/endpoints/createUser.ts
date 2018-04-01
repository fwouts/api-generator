import { CreateUserRequest, CreateUserResponse } from "../server";

export async function createUser(
  request: CreateUserRequest,
): Promise<CreateUserResponse> {
  return {
    status: "success",
    id: "abc",
    info: {
      name: "Hello",
    },
  };
}
