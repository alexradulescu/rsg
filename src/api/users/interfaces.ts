import { ROLES } from 'src/global'

import { OperatorStatus } from './enums'

export interface Role {
  id: string
  label: string
  description: string
}

export interface ApiUser {
  id: string
  name: string
  email: string
  age: string
  role: string
  status: string
}

export interface User {
  id: string
  name: string
  email: string
  age: number
  role: ROLES
  status: OperatorStatus
}
