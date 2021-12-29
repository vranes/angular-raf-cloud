export interface JwtWrapper{
  jwt: string,
  permissions: string
}

export interface User{
  id: string
  email: string
  name: string
  surname: string
  password: string
  permissions: string[]
}
