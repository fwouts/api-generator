export function validate_CreateUserRequest(value: any): boolean {
  if (!(value instanceof Object)) {
    return false;
  }
  if (!validate_CreateUserRequest_name(value.name)) {
    return false;
  }
  if (!validate_CreateUserRequest_password(value.password)) {
    return false;
  }
  return true;
}

export function validate_CreateUserRequest_name(value: any): boolean {
  return typeof value === "string";
}

export function validate_CreateUserRequest_password(value: any): boolean {
  return typeof value === "string";
}

export function validate_CreateUserResponse(value: any): boolean {
  if (!(value instanceof Object)) {
    return false;
  }
  if (!validate_CreateUserResponse_id(value.id)) {
    return false;
  }
  return true;
}

export function validate_CreateUserResponse_id(value: any): boolean {
  return typeof value === "string";
}

export function validate_ListUsersResponse(value: any): boolean {
  if (!(value instanceof Array)) {
    return false;
  }
  for (const item of value) {
    if (!validate_ListUsersResponse_item(item)) {
      return false;
    }
  }
  return true;
}

export function validate_ListUsersResponse_item(value: any): boolean {
  return validate_User(value);
}

export function validate_User(value: any): boolean {
  if (!(value instanceof Object)) {
    return false;
  }
  if (!validate_User_name(value.name)) {
    return false;
  }
  return true;
}

export function validate_User_name(value: any): boolean {
  return typeof value === "string";
}

export function validate_AuthRequired(value: any): boolean {
  if (!(value instanceof Object)) {
    return false;
  }
  if (!validate_AuthRequired_Authorization(value.Authorization)) {
    return false;
  }
  return true;
}

export function validate_AuthRequired_Authorization(value: any): boolean {
  return typeof value === "string";
}
