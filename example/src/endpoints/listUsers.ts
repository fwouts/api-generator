import { AuthRequired, ListUsers_Response } from "../api/types";

export async function listUsers(
  headers: AuthRequired,
): Promise<ListUsers_Response> {
  throw new Error("Unimplemented.");
}
