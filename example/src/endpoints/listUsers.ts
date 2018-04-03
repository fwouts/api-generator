import { AuthRequired, User } from "../api";

export async function listUsers(headers: AuthRequired): Promise<User[]> {
  return [
    {
      name: "Frank",
    },
  ];
}
