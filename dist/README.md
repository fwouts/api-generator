# API generator

An easy way to declare an API and generate both client-side and server-side code.

## Installing

With NPM:
```
npm install -g @zenclabs/api
```

With Yarn:
```
yarn global add @zenclabs/api
```

## Example

Here is an example of a REST API that exposes two endpoints:

### users.api
```
endpoint createUser: POST /users CreateUserRequest
-> success 200 CreateUserResponse
-> failure 400 string

type CreateUserRequest = {
  name: string
  password: string
}

type CreateUserResponse = {
  id: string
}

@headers(AuthRequired)
endpoint listUsers: GET /users void
-> success 200 ListUsersResponse
-> failure 403 string

type ListUsersResponse = User[]

@headers(AuthRequired)
endpoint getUser: GET /users/:id void
-> success 200 User
-> failure 403 string
-> notfound 404 void

type User = {
  name: string
}

type AuthRequired = {
  Authorization: string
}
```

We can then generate a TypeScript client and/or server with:
```
# Generate client code
apidef generate typescript users.api src --client https://api.example.com
# Output:
# - src/api/types.ts
# - src/api/validators.ts
# - src/client.ts

# Generate server code
apidef generate typescript users.api src --server
# Output:
# - src/api/types.ts
# - src/api/validators.ts
# - src/server.ts
# - src/endpoints/loginUser.ts
# - src/endpoints/postMessage.ts
```

To see the generated code, please check out the [`example`](example/) directory.

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

An endpoint is defined with:
```
endpoint [name]: /some/path/:param [method] [inputType]
-> case1 [statusCode1] [outputType1]
-> case2 [statusCode2] [outputType2]
-> case3 [statusCode3] [outputType3]
```

The HTTP method must be one of `GET`, `POST`, `PUT` or `DELETE`.

The input and/or the output type may be `void`, meaning that the endpoint does not take any input
or does not produce any output.

Endpoints can be annotated with `@headers(headerType)` which will ensure that the appropriate
headers are provided.
