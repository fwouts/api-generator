import { AuthRequired, User } from "../server";

export async function listUsers(headers: AuthRequired): Promise<User[]> {
  return [
    {
      name: "Frank",
    },
  ];
}
