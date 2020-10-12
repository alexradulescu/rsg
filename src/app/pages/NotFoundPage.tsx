import React from 'react'
import { Helmet } from 'react-helmet'
import { useHistory } from 'react-router-dom'

import { ROUTES, AuthPageLayout } from 'src/global'

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
      <div>
        <h3>The page you are looking could not be found</h3>
        <aside>
          <button onClick={redirectToLogin}>Go to Login</button>
          <button onClick={redirectHome}>Go Home</button>
        </aside>
      </div>
    </AuthPageLayout>
  )
}

LoginPage.displayName = 'LoginDevPage'

export default LoginPage
