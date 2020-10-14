import React, { Suspense, lazy, memo, FC } from 'react'
import { useRecoilValue } from 'recoil'
import { Route, Switch } from 'react-router'

import { ROUTES, usePermission } from 'src/global'
import { authUserState } from 'src/auth'

/**
 * NOTE: Lazy loading the individual pages for faster loading and smaller bundles
 */
const LoginPage = lazy(() => import('src/auth/pages/LoginPage'))

const UsersPage = lazy(() => import('src/users/pages/UsersPage'))
const LevelsPage = lazy(() => import('src/users/pages/LevelsPage'))

const HomePage = lazy(() => import('../pages/HomePage'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'))

/**
 * NOTE: As a general rule, all routes must be centralised
 */

export const AppRoutes: FC = memo(() => {
  const { isPermitted } = usePermission()
  const user = useRecoilValue(authUserState)

  return (
    <Suspense fallback={<h5>Loading...</h5>}>
      <Switch>
        <Route path={ROUTES.login.url}>
          <LoginPage />
        </Route>
        {user && (
          <Route exact={true} path={ROUTES.home.url}>
            <HomePage />
          </Route>
        )}

        {/* 
          NOTE: Certain pages and features will only be available if the user has the right permission.
        */}
        {isPermitted('UsersPage:View') && (
          <Route exact={true} path={ROUTES.users.url}>
            <UsersPage />
          </Route>
        )}
        {isPermitted('LevelsPage:View') && (
          <Route exact={true} path={ROUTES.levels.url}>
            <LevelsPage />
          </Route>
        )}

        <Route path='*'>
          <NotFoundPage />
        </Route>
      </Switch>
    </Suspense>
  )
})

AppRoutes.displayName = 'AppRoutes'
