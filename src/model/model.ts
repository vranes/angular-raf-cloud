export interface JwtWrapper{
  jwt: string,
  permissions: string
}

export interface UserWrapper{
  id: string
  email: string
  name: string
  surname: string
  password: string
  permissions: string[]
}

export class User{
  id: string = ''
  email: string = ''
  name: string = ''
  surname: string = ''
  password: string = ''
  permissions: string[] = []
}
