import React, { Suspense, lazy, memo, FC } from 'react'
import { Route, Switch } from 'react-router'

import { ROUTES, usePermission } from 'src/global'

/**
 * NOTE: Lazy loading the individual pages for faster loading and smaller bundles
 */
const LoginPage = lazy(() => import('src/auth/pages/LoginPage'))

const OperatorsAdminPage = lazy(() => import('src/admin/pages/OperatorsAdminPage'))
const RolesAdminPage = lazy(() => import('src/admin/pages/RolesAdminPage'))

const HomePage = lazy(() => import('../pages/HomePage'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'))

/**
 * NOTE: As a general rule, all routes must be centralised
 */

export const AppRoutes: FC = memo(() => {
  const { isPermitted } = usePermission()

  return (
    <Suspense fallback={<h5>Loading...</h5>}>
      <Switch>
        <Route path={ROUTES.login.url}>
          <LoginPage />
        </Route>
        <Route exact={true} path={ROUTES.home.url}>
          <HomePage />
        </Route>

        {/* 
          NOTE: Certain pages and features will only be available if the user has the right permission.
        */}
        {isPermitted('OperatorsAdminPage:View') && (
          <Route exact={true} path={ROUTES.adminOperators.url}>
            <OperatorsAdminPage />
          </Route>
        )}
        {isPermitted('RolesAdminPage:View') && (
          <Route exact={true} path={ROUTES.adminRoles.url}>
            <RolesAdminPage />
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