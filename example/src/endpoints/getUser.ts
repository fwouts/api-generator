import { AuthRequired, User } from "../api";

export async function getUser(
  headers: AuthRequired,
  id: string,
): Promise<User> {
  return {
    name: "Hi",
  };
}
