import { ROLES } from 'src/global'

import { OperatorStatus } from './enums'
import { Permission, RolePermission, Role, Operator } from './interfaces'

export const ROLES_MOCK_DATA: Role[] = [
  {
    id: 'a01',
    label: 'Super Wizard',
    description: 'The top of the top',
  },
  {
    id: 'b01',
    label: 'Wizard',
    description: 'The ones doing most of the magic',
  },

  {
    id: 'c01',
    label: 'Warlock',
    description: 'The other ones doing magic',
  },

  {
    id: 'd01',
    label: 'Apprentice',
    description: 'The magic working bees',
  },

  {
    id: 'e01',
    label: 'Muggle',
    description: 'Non-wizards',
  },
]

export const OPERATORS_MOCK_DATA: Operator[] = [
  {
    id: 'a01',
    name: 'Di Wu',
    email: 'di.wu@block.one',
    role: ROLES.ADMIN,
    status: OperatorStatus.ACTIVE,
  },
  {
    id: 'a02',
    name: 'Andrew Tran',
    email: 'andrew.tran@block.one',
    role: ROLES.ADMIN,
    status: OperatorStatus.ACTIVE,
  },
  {
    id: 'a03',
    name: 'Dominic Tobias',
    email: 'dominic.tobias@block.one',
    role: ROLES.ADMIN,
    status: OperatorStatus.ACTIVE,
  },
  {
    id: 'a04',
    name: 'Pak Kian Lew',
    email: 'pak-kian.lew@block.one',
    role: ROLES.USER,
    status: OperatorStatus.ACTIVE,
  },
  {
    id: 'a05',
    name: 'Mariah Bragg',
    email: 'mariah.bragg@block.one',
    role: ROLES.USER,
    status: OperatorStatus.ACTIVE,
  },
  {
    id: 'a06',
    name: 'Tara Tritt',
    email: 'tara.tritt@block.one',
    role: ROLES.USER,
    status: OperatorStatus.ACTIVE,
  },
  {
    id: 'a07',
    name: 'Alex Radulescu',
    email: 'alex.radulescu@block.one',
    role: ROLES.USER,
    status: OperatorStatus.ACTIVE,
  },
]
