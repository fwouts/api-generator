import { User } from "../client";

export async function listUsers(): Promise<User[]> {
  return [
    {
      name: "Frank",
    },
  ];
}
