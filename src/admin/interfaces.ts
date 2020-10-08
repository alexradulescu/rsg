import { ROLES } from 'src/global'

import { OperatorStatus } from './enums'

export interface Permission {
  id: string
  label: string
  description: string
}

export interface RolePermission extends Permission {
  active: boolean
}

export interface Role {
  id: string
  label: string
  description: string
  permissions: RolePermission[]
}

export interface Operator {
  id: string
  name: string
  email: string
  role: ROLES
  status: OperatorStatus
}
