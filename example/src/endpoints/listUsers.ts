import { User } from "../client";

export async function listUsers(request: null): Promise<User[]> {
  return [
    {
      name: "Frank",
    },
  ];
}
