import { User } from "../server";

export async function getUser(id: string): Promise<User> {
  return {
    name: "Hi",
  };
}
