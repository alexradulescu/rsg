import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'

import { ROUTES, userPermissionsState, ROLES, PERMISSIONS } from 'src/global'

import { authUserState } from '../state'

export const LoginContainer: React.FC = () => {
  const history = useHistory()
  const setAuthUser = useSetRecoilState(authUserState)
  const setUserPermissions = useSetRecoilState(userPermissionsState)

  const handleDemoOperator = () => {
    setAuthUser('operator@block.one')
    setUserPermissions(PERMISSIONS[ROLES.USER])
    history.push(ROUTES.home.url)
  }

  const handleDemoAdmin = () => {
    setAuthUser('admin@block.one')
    setUserPermissions(PERMISSIONS[ROLES.ADMIN])
    history.push(ROUTES.home.url)
  }

  return (
    <aside>
      <button onClick={handleDemoOperator}>Login as User</button>
      <button type='submit' onClick={handleDemoAdmin}>
        Login as Admin
      </button>
    </aside>
  )
}
