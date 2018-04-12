import { AuthRequired, GetUser_Response } from "../api";

export async function getUser(headers: AuthRequired, id: string): Promise<GetUser_Response> {
  throw new Error("Unimplemented.");
}
