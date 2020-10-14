import { useRecoilValue } from 'recoil'

import { userPermissionsState } from '../state'

export enum ROLES {
  USER = 'operator',
  ADMIN = 'admin',
}

export const PERMISSIONS = {
  [ROLES.USER]: [],
  [ROLES.ADMIN]: ['UsersPage:View', 'LevelsPage:View'],
}

export const usePermission = () => {
  const userPermissions = useRecoilValue(userPermissionsState)

  const isPermitted = (permission: string) => {
    return userPermissions.includes(permission)
  }

  return { isPermitted }
}
