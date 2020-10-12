import React from 'react'
import { Helmet } from 'react-helmet'

import { AuthPageLayout } from 'src/global'

import { LoginContainer } from '../components'

export const LoginPage: React.FC = () => {
  return (
    <AuthPageLayout>
      <Helmet title='Login' />
      <LoginContainer />
    </AuthPageLayout>
  )
}

LoginPage.displayName = 'LoginDevPage'

export default LoginPage
