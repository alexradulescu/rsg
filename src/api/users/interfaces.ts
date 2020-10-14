import { UserStatus } from './enums'

export interface Level {
  id: string
  value: string
  label: string
}

/**
 * NOTE: ApiUser is the interface for what the response.
 * The the response is formatted into the normal User interface
 */
export interface ApiUser {
  id: string
  name: string
  email: string
  level: string
  age: string
  status: string
}

export interface User {
  id: string
  name: string
  email: string
  level: string
  age: number
  status: UserStatus
}
