# APIdef

Use **apidef** to declare your API and automatically generate both client and server code.

## Example

Here is an example of a REST API that exposes two endpoints:

### example.api
```
// Endpoint to login users.
endpoint loginUser:
  POST /users/login
  LoginUserRequest -> LoginUserResponse

type LoginUserRequest = {
  email: string
  password: string
}

type LoginUserResponse = {
  status: @error
  notice: string
} | {
  status: @success
  jwtToken: string
}

// Endpoint to create a post.
@headers(AuthRequired)
endpoint postMessage:
  POST /messages
  PostMessageRequest -> PostMessageResponse

type PostMessageRequest = {
  text: string
}

type PostMessageResponse = {
  status: @success | @error
  notice: string
}

type AuthRequired = {
  Authorization: string
}
```

We can then generate a TypeScript client and/or server with:
```
# Generate client code
api generate typescript example.api src --client https://api.example.com
# Output:
# - src/api.ts
# - src/client.ts

# Generate server code
api generate typescript example.api src --server
# Output:
# - src/api.ts
# - src/server.ts
# - src/endpoints/loginUser.ts
# - src/endpoints/postMessage.ts
```

## Type definitions

A type is defined with `type [NAME] = [DEFINITION]`. It can be either:

- an array:
```
type t = otherType[]
```
- an union:
```
type t = type1 | type2 | type3
```
- a struct:
```
type t = {
  field1: type1
  field2: type2
  optionalField3?: type3
}
```

- a symbol (i.e. a constant string):
```
type t = @abc
```

- or another type, including a primitive type:
```
type t = otherType
type t = bool
type t = int
type t = long
type t = float
type t = double
type t = string
type t = null
```

## Endpoints

An endpoint is defined with `endpoint [NAME]: [PATH] [HTTP_METHOD] [INPUT_TYPE] -> [OUTPUT_TYPE]`.

The HTTP method must be one of `GET`, `POST`, `PUT` or `DELETE`.

The input and/or the output type may be `void`, meaning that the endpoint does not take any input
or does not produce any output.

Endpoints can be annotated with `@headers([HEADERS_TYPE])` which will ensure that the appropriate
headers are provided.