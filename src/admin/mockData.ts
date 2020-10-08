import { ROLES } from 'src/global'

import { OperatorStatus } from './enums'
import { Permission, RolePermission, Role, Operator } from './interfaces'

export const PERMISSIONS_MOCK_DATA: Permission[] = [
  {
    id: 'a01',
    label: 'AdminPage:View',
    description: 'Visit the admin pages',
  },
  {
    id: 'b01',
    label: 'Admin:AddOperator',
    description: 'Can add new operators',
  },
  {
    id: 'c01',
    label: 'Admin:EditRole',
    description: 'Can edit roles',
  },
  {
    id: 'd01',
    label: 'Admin:DeletePermission',
    description: 'Can delete permissions',
  },
  {
    id: 'e01',
    label: 'CustomersPage:View',
    description: 'View the customer pages',
  },
  {
    id: 'f01',
    label: 'Customer:AddCustomer',
    description: 'Can add customers',
  },
  {
    id: 'g01',
    label: 'Customer:EditCustomer',
    description: 'Can Edit customers',
  },
  {
    id: 'h01',
    label: 'Customer:FlagCustomer',
    description: 'Can Flag customers',
  },
  {
    id: 'i01',
    label: 'CompanyPage:View',
    description: 'View the companies page',
  },
  {
    id: 'j01',
    label: 'Company:AddCompany',
    description: 'Can add companies',
  },
  {
    id: 'k01',
    label: 'Company:EditCompany',
    description: 'Can edit companies',
  },
  {
    id: 'l01',
    label: 'Company:FlagCompany',
    description: 'Can flag companies',
  },
]

export const ROLE_PERMISSIONS_MOCK_DATA: RolePermission[] = PERMISSIONS_MOCK_DATA.map(permission => ({
  ...permission,
  active: Boolean(Math.random() < 0.5),
}))

export const ROLES_MOCK_DATA: Role[] = [
  {
    id: 'a01',
    label: 'Super Wizard',
    description: 'The top of the top',
    permissions: ROLE_PERMISSIONS_MOCK_DATA,
  },
  {
    id: 'b01',
    label: 'Wizard',
    description: 'The ones doing most of the magic',
    permissions: ROLE_PERMISSIONS_MOCK_DATA,
  },

  {
    id: 'c01',
    label: 'Warlock',
    description: 'The other ones doing magic',
    permissions: ROLE_PERMISSIONS_MOCK_DATA,
  },

  {
    id: 'd01',
    label: 'Apprentice',
    description: 'The magic working bees',
    permissions: ROLE_PERMISSIONS_MOCK_DATA,
  },

  {
    id: 'e01',
    label: 'Muggle',
    description: 'Non-wizards',
    permissions: ROLE_PERMISSIONS_MOCK_DATA,
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
