import { useRecoilValue } from 'recoil'

import { userPermissionsState } from '../state'

export enum ROLES {
  USER = 'operator',
  ADMIN = 'admin',
}

export const PERMISSIONS = {
  [ROLES.USER]: [
    'CustomersGridPage:View',
    'CustomerPage:View',
    'CompaniesGridPage:View',
    'CompanyPage:View',
    'ExchangePage:View',
    'CustodyPage:View',
  ],
  [ROLES.ADMIN]: [
    'CustomersGridPage:View',
    'CustomerPage:View',
    'CompaniesGridPage:View',
    'CompanyPage:View',
    'ExchangePage:View',
    'CustodyPage:View',
    'AdminPage:View',
    'OperatorsAdminPage:View',
    'RolesAdminPage:View',
    'PermissionsAdminPage:View',
  ],
}

export const usePermission = () => {
  const userPermissions = useRecoilValue(userPermissionsState)

  const isPermitted = (permission: string) => {
    return userPermissions.includes(permission)
  }

  return { isPermitted }
}
