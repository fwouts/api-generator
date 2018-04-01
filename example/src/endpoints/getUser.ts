import { User } from "../server";

export async function getUser(id: string, request: null): Promise<User> {
  return {
    name: "Hi",
  };
}
