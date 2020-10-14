import React, { ReactNode } from 'react'
import { useRecoilValue } from 'recoil'
import { Link } from 'react-router-dom'

import { authUserState } from 'src/auth'

import { ROUTES } from '../constants'

export const MainFooter: React.FC = () => {
  const user = useRecoilValue(authUserState)

  return (
    <footer>
      <samp>{user}</samp>
      <Link to={ROUTES.login.url}>Log Out</Link>
    </footer>
  )
}

MainFooter.displayName = 'MainFooter'
