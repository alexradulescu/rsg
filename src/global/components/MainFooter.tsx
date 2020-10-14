import React, { ReactNode } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useHistory } from 'react-router'

import { authUserState } from 'src/auth'

import { ROUTES } from '../constants'

export const MainFooter: React.FC = () => {
  const [user, setUser] = useRecoilState(authUserState)
  const history = useHistory()

  const logout = () => {
    setUser('')
    history.push(ROUTES.login.url)
  }

  return (
    <footer>
      <samp>{user}</samp>
      <button onClick={logout}>Log Out</button>
    </footer>
  )
}

MainFooter.displayName = 'MainFooter'
