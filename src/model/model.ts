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

export interface Node{
  id: string
  name: string
  status: string
  created_at: Date
}

export interface ErrorMessage {
  id: number,
  nodeId: number,
  message: string,
  status: string,
  date: Date
}
