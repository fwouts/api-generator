import { AuthRequired, User } from "../server";

export async function getUser(
  headers: AuthRequired,
  id: string,
): Promise<User> {
  return {
    name: "Hi",
  };
}
