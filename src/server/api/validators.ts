import * as types from "./types";

export function validate_DescribeResponse(value: any): value is types.DescribeResponse {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_DescribeResponse_endpoints(value.endpoints)) {
    return false;
  }
  if (!validate_DescribeResponse_types(value.types)) {
    return false;
  }
  return true;
}

export function validate_DescribeResponse_endpoints(value: any): boolean {
  if (value === null || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }
  for (const key of Object.keys(value)) {
    if (!validate_string(key)) {
      return false;
    }
    if (!validate_DescribeResponse_endpoints_item(value[key])) {
      return false;
    }
  }
  return true;
}

export function validate_DescribeResponse_endpoints_item(value: any): boolean {
  return validate_Endpoint(value);
}

export function validate_DescribeResponse_types(value: any): boolean {
  if (value === null || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }
  for (const key of Object.keys(value)) {
    if (!validate_string(key)) {
      return false;
    }
    if (!validate_DescribeResponse_types_item(value[key])) {
      return false;
    }
  }
  return true;
}

export function validate_DescribeResponse_types_item(value: any): boolean {
  return validate_Type(value);
}

export function validate_Endpoint(value: any): value is types.Endpoint {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_Endpoint_name(value.name)) {
    return false;
  }
  if (!validate_Endpoint_method(value.method)) {
    return false;
  }
  if (!validate_Endpoint_route(value.route)) {
    return false;
  }
  if (!validate_Endpoint_headers(value.headers)) {
    return false;
  }
  if (!validate_Endpoint_input(value.input)) {
    return false;
  }
  if (!validate_Endpoint_outputs(value.outputs)) {
    return false;
  }
  return true;
}

export function validate_Endpoint_name(value: any): boolean {
  return typeof value === "string";
}

export function validate_Endpoint_method(value: any): boolean {
  return validate_Method(value);
}

export function validate_Endpoint_route(value: any): boolean {
  if (!Array.isArray(value)) {
    return false;
  }
  for (const item of value) {
    if (!validate_Endpoint_route_item(item)) {
      return false;
    }
  }
  return true;
}

export function validate_Endpoint_route_item(value: any): boolean {
  return validate_RouteSubpath(value);
}

export function validate_Endpoint_headers(value: any): boolean {
  return value === undefined || validate_Endpoint_headers_present(value);
}

export function validate_Endpoint_headers_present(value: any): boolean {
  return validate_TypeName(value);
}

export function validate_Endpoint_input(value: any): boolean {
  return validate_TypeName(value);
}

export function validate_Endpoint_outputs(value: any): boolean {
  if (!Array.isArray(value)) {
    return false;
  }
  for (const item of value) {
    if (!validate_Endpoint_outputs_item(item)) {
      return false;
    }
  }
  return true;
}

export function validate_Endpoint_outputs_item(value: any): boolean {
  return validate_Output(value);
}

export function validate_Method(value: any): value is types.Method {
  if (validate_Method_0(value)) {
    return true;
  }
  if (validate_Method_1(value)) {
    return true;
  }
  if (validate_Method_2(value)) {
    return true;
  }
  if (validate_Method_3(value)) {
    return true;
  }
  return false;
}

export function validate_Method_0(value: any): boolean {
  return value === "GET";
}

export function validate_Method_1(value: any): boolean {
  return value === "POST";
}

export function validate_Method_2(value: any): boolean {
  return value === "PUT";
}

export function validate_Method_3(value: any): boolean {
  return value === "DELETE";
}

export function validate_RouteSubpath(value: any): value is types.RouteSubpath {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_RouteSubpath_name(value.name)) {
    return false;
  }
  if (!validate_RouteSubpath_dynamic(value.dynamic)) {
    return false;
  }
  return true;
}

export function validate_RouteSubpath_name(value: any): boolean {
  return typeof value === "string";
}

export function validate_RouteSubpath_dynamic(value: any): boolean {
  return typeof value === "boolean";
}

export function validate_Output(value: any): value is types.Output {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_Output_name(value.name)) {
    return false;
  }
  if (!validate_Output_statusCode(value.statusCode)) {
    return false;
  }
  if (!validate_Output_type(value.type)) {
    return false;
  }
  return true;
}

export function validate_Output_name(value: any): boolean {
  return typeof value === "string";
}

export function validate_Output_statusCode(value: any): boolean {
  return typeof value === "number" && Number.isInteger(value);
}

export function validate_Output_type(value: any): boolean {
  return validate_TypeName(value);
}

export function validate_Type(value: any): value is types.Type {
  if (validate_Type_0(value)) {
    return true;
  }
  if (validate_Type_1(value)) {
    return true;
  }
  if (validate_Type_2(value)) {
    return true;
  }
  if (validate_Type_3(value)) {
    return true;
  }
  if (validate_Type_4(value)) {
    return true;
  }
  if (validate_Type_5(value)) {
    return true;
  }
  if (validate_Type_6(value)) {
    return true;
  }
  return false;
}

export function validate_Type_0(value: any): boolean {
  return validate_ArrayType(value);
}

export function validate_Type_1(value: any): boolean {
  return validate_MapType(value);
}

export function validate_Type_2(value: any): boolean {
  return validate_UnionType(value);
}

export function validate_Type_3(value: any): boolean {
  return validate_StructType(value);
}

export function validate_Type_4(value: any): boolean {
  return validate_OptionalType(value);
}

export function validate_Type_5(value: any): boolean {
  return validate_SymbolType(value);
}

export function validate_Type_6(value: any): boolean {
  return validate_TypeName(value);
}

export function validate_ArrayType(value: any): value is types.ArrayType {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_ArrayType_kind(value.kind)) {
    return false;
  }
  if (!validate_ArrayType_items(value.items)) {
    return false;
  }
  return true;
}

export function validate_ArrayType_kind(value: any): boolean {
  return value === "array";
}

export function validate_ArrayType_items(value: any): boolean {
  return validate_Type(value);
}

export function validate_MapType(value: any): value is types.MapType {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_MapType_kind(value.kind)) {
    return false;
  }
  if (!validate_MapType_items(value.items)) {
    return false;
  }
  return true;
}

export function validate_MapType_kind(value: any): boolean {
  return value === "map";
}

export function validate_MapType_items(value: any): boolean {
  return validate_Type(value);
}

export function validate_UnionType(value: any): value is types.UnionType {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_UnionType_kind(value.kind)) {
    return false;
  }
  if (!validate_UnionType_items(value.items)) {
    return false;
  }
  return true;
}

export function validate_UnionType_kind(value: any): boolean {
  return value === "union";
}

export function validate_UnionType_items(value: any): boolean {
  if (!Array.isArray(value)) {
    return false;
  }
  for (const item of value) {
    if (!validate_UnionType_items_item(item)) {
      return false;
    }
  }
  return true;
}

export function validate_UnionType_items_item(value: any): boolean {
  return validate_Type(value);
}

export function validate_StructType(value: any): value is types.StructType {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_StructType_kind(value.kind)) {
    return false;
  }
  if (!validate_StructType_items(value.items)) {
    return false;
  }
  return true;
}

export function validate_StructType_kind(value: any): boolean {
  return value === "struct";
}

export function validate_StructType_items(value: any): boolean {
  if (value === null || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }
  for (const key of Object.keys(value)) {
    if (!validate_string(key)) {
      return false;
    }
    if (!validate_StructType_items_item(value[key])) {
      return false;
    }
  }
  return true;
}

export function validate_StructType_items_item(value: any): boolean {
  return validate_Type(value);
}

export function validate_OptionalType(value: any): value is types.OptionalType {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_OptionalType_kind(value.kind)) {
    return false;
  }
  if (!validate_OptionalType_type(value.type)) {
    return false;
  }
  return true;
}

export function validate_OptionalType_kind(value: any): boolean {
  return value === "optional";
}

export function validate_OptionalType_type(value: any): boolean {
  return validate_Type(value);
}

export function validate_SymbolType(value: any): value is types.SymbolType {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_SymbolType_kind(value.kind)) {
    return false;
  }
  if (!validate_SymbolType_value(value.value)) {
    return false;
  }
  return true;
}

export function validate_SymbolType_kind(value: any): boolean {
  return value === "symbol";
}

export function validate_SymbolType_value(value: any): boolean {
  return typeof value === "string";
}

export function validate_TypeName(value: any): value is types.TypeName {
  if (validate_TypeName_0(value)) {
    return true;
  }
  if (validate_TypeName_1(value)) {
    return true;
  }
  return false;
}

export function validate_TypeName_0(value: any): boolean {
  return typeof value === "string";
}

export function validate_TypeName_1(value: any): boolean {
  return validate_PrimitiveType(value);
}

export function validate_PrimitiveType(value: any): value is types.PrimitiveType {
  if (validate_PrimitiveType_0(value)) {
    return true;
  }
  if (validate_PrimitiveType_1(value)) {
    return true;
  }
  if (validate_PrimitiveType_2(value)) {
    return true;
  }
  if (validate_PrimitiveType_3(value)) {
    return true;
  }
  if (validate_PrimitiveType_4(value)) {
    return true;
  }
  if (validate_PrimitiveType_5(value)) {
    return true;
  }
  if (validate_PrimitiveType_6(value)) {
    return true;
  }
  return false;
}

export function validate_PrimitiveType_0(value: any): boolean {
  return value === "bool";
}

export function validate_PrimitiveType_1(value: any): boolean {
  return value === "int";
}

export function validate_PrimitiveType_2(value: any): boolean {
  return value === "long";
}

export function validate_PrimitiveType_3(value: any): boolean {
  return value === "float";
}

export function validate_PrimitiveType_4(value: any): boolean {
  return value === "double";
}

export function validate_PrimitiveType_5(value: any): boolean {
  return value === "string";
}

export function validate_PrimitiveType_6(value: any): boolean {
  return value === "null";
}

export function validate_Describe_Response(value: any): value is types.Describe_Response {
  if (validate_Describe_Response_0(value)) {
    return true;
  }
  if (validate_Describe_Response_1(value)) {
    return true;
  }
  return false;
}

export function validate_Describe_Response_0(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_Describe_Response_0_kind(value.kind)) {
    return false;
  }
  if (!validate_Describe_Response_0_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_Describe_Response_0_kind(value: any): boolean {
  return value === "success";
}

export function validate_Describe_Response_0_data(value: any): boolean {
  return validate_DescribeResponse(value);
}

export function validate_Describe_Response_1(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_Describe_Response_1_kind(value.kind)) {
    return false;
  }
  if (!validate_Describe_Response_1_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_Describe_Response_1_kind(value: any): boolean {
  return value === "failure";
}

export function validate_Describe_Response_1_data(value: any): boolean {
  return typeof value === "string";
}

export function validate_bool(value: any): value is boolean {
  return typeof value === "boolean";
}

export function validate_int(value: any): value is number {
  return typeof value === "number" && Number.isInteger(value);
}

export function validate_long(value: any): value is number {
  return typeof value === "number" && Number.isInteger(value);
}

export function validate_float(value: any): value is number {
  return typeof value === "number";
}

export function validate_double(value: any): value is number {
  return typeof value === "number";
}

export function validate_string(value: any): value is string {
  return typeof value === "string";
}

export function validate_null(value: any): value is null {
  return value === null;
}
