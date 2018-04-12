export interface CreateUserRequest {
  name: string;
  password: string;
}

export interface CreateUserResponse {
  id: string;
}

export type ListUsersResponse = User[];

export interface User {
  name: string;
}

export interface AuthRequired {
  Authorization: string;
}

export type CreateUser_Response = {
  kind: "success";
  data: CreateUserResponse;
} | {
  kind: "failure";
  data: string;
};

export type ListUsers_Response = {
  kind: "success";
  data: ListUsersResponse;
} | {
  kind: "failure";
  data: string;
};

export type GetUser_Response = {
  kind: "success";
  data: User;
} | {
  kind: "failure";
  data: string;
};
