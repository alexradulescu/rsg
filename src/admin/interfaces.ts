import { ROLES } from 'src/global'

import { OperatorStatus } from './enums'

export interface Role {
  id: string
  label: string
  description: string
}

export interface Operator {
  id: string
  name: string
  email: string
  role: ROLES
  status: OperatorStatus
}
