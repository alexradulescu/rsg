import React from 'react'
import { Helmet } from 'react-helmet'
import { useHistory } from 'react-router-dom'

import { ROUTES, AuthPageLayout, CenterWrapper } from 'src/global'

export const LoginPage: React.FC = () => {
  const history = useHistory()

  const redirectToLogin = () => {
    history.push(ROUTES.login.url)
  }

  const redirectHome = () => {
    history.push(ROUTES.home.url)
  }

  return (
    <AuthPageLayout>
      <Helmet title='Not Found' />
      <CenterWrapper>
        <h3>The page you are looking could not be found</h3>
        <div>
          <button type='submit' onClick={redirectToLogin}>
            Go to Login
          </button>{' '}
          <button onClick={redirectHome}>Go Home</button>
        </div>
      </CenterWrapper>
    </AuthPageLayout>
  )
}

LoginPage.displayName = 'LoginDevPage'

export default LoginPage
