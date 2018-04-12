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

export function validate_CreateUser_Response(value: any): boolean {
  if (validate_CreateUser_Response_0(value)) {
    return true;
  }
  if (validate_CreateUser_Response_1(value)) {
    return true;
  }
  return false;
}

export function validate_CreateUser_Response_0(value: any): boolean {
  if (!(value instanceof Object)) {
    return false;
  }
  if (!validate_CreateUser_Response_0_kind(value.kind)) {
    return false;
  }
  if (!validate_CreateUser_Response_0_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_CreateUser_Response_0_kind(value: any): boolean {
  return value === "success";
}

export function validate_CreateUser_Response_0_data(value: any): boolean {
  return validate_CreateUserResponse(value);
}

export function validate_CreateUser_Response_1(value: any): boolean {
  if (!(value instanceof Object)) {
    return false;
  }
  if (!validate_CreateUser_Response_1_kind(value.kind)) {
    return false;
  }
  if (!validate_CreateUser_Response_1_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_CreateUser_Response_1_kind(value: any): boolean {
  return value === "failure";
}

export function validate_CreateUser_Response_1_data(value: any): boolean {
  return typeof value === "string";
}

export function validate_ListUsers_Response(value: any): boolean {
  if (validate_ListUsers_Response_0(value)) {
    return true;
  }
  if (validate_ListUsers_Response_1(value)) {
    return true;
  }
  return false;
}

export function validate_ListUsers_Response_0(value: any): boolean {
  if (!(value instanceof Object)) {
    return false;
  }
  if (!validate_ListUsers_Response_0_kind(value.kind)) {
    return false;
  }
  if (!validate_ListUsers_Response_0_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_ListUsers_Response_0_kind(value: any): boolean {
  return value === "success";
}

export function validate_ListUsers_Response_0_data(value: any): boolean {
  return validate_ListUsersResponse(value);
}

export function validate_ListUsers_Response_1(value: any): boolean {
  if (!(value instanceof Object)) {
    return false;
  }
  if (!validate_ListUsers_Response_1_kind(value.kind)) {
    return false;
  }
  if (!validate_ListUsers_Response_1_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_ListUsers_Response_1_kind(value: any): boolean {
  return value === "failure";
}

export function validate_ListUsers_Response_1_data(value: any): boolean {
  return typeof value === "string";
}

export function validate_GetUser_Response(value: any): boolean {
  if (validate_GetUser_Response_0(value)) {
    return true;
  }
  if (validate_GetUser_Response_1(value)) {
    return true;
  }
  if (validate_GetUser_Response_2(value)) {
    return true;
  }
  return false;
}

export function validate_GetUser_Response_0(value: any): boolean {
  if (!(value instanceof Object)) {
    return false;
  }
  if (!validate_GetUser_Response_0_kind(value.kind)) {
    return false;
  }
  if (!validate_GetUser_Response_0_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_GetUser_Response_0_kind(value: any): boolean {
  return value === "success";
}

export function validate_GetUser_Response_0_data(value: any): boolean {
  return validate_User(value);
}

export function validate_GetUser_Response_1(value: any): boolean {
  if (!(value instanceof Object)) {
    return false;
  }
  if (!validate_GetUser_Response_1_kind(value.kind)) {
    return false;
  }
  if (!validate_GetUser_Response_1_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_GetUser_Response_1_kind(value: any): boolean {
  return value === "failure";
}

export function validate_GetUser_Response_1_data(value: any): boolean {
  return typeof value === "string";
}

export function validate_GetUser_Response_2(value: any): boolean {
  if (!(value instanceof Object)) {
    return false;
  }
  if (!validate_GetUser_Response_2_kind(value.kind)) {
    return false;
  }
  return true;
}

export function validate_GetUser_Response_2_kind(value: any): boolean {
  return value === "notfound";
}

export function validate_bool(value: any): boolean {
  return typeof value === "boolean";
}

export function validate_int(value: any): boolean {
  return typeof value === "number" && Number.isInteger(value);
}

export function validate_long(value: any): boolean {
  return typeof value === "number" && Number.isInteger(value);
}

export function validate_float(value: any): boolean {
  return typeof value === "number";
}

export function validate_double(value: any): boolean {
  return typeof value === "number";
}

export function validate_string(value: any): boolean {
  return typeof value === "string";
}

export function validate_null(value: any): boolean {
  return value === null;
}

export function validate_void(value: any): boolean {
  return value === undefined;
}
