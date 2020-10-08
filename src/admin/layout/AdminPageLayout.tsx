import React, { ReactNode, FC } from 'react'
import { Helmet } from 'react-helmet'

import { SecondaryNav, ROUTES, MainPageLayout } from 'src/global'

const ADMIN_MENU_ITEMS = [
  {
    dataTestSelector: 'AdminMenuItem-AdminLink',
    title: ROUTES.adminOperators.title,
    to: ROUTES.adminOperators.url,
    exact: true,
  },
  {
    dataTestSelector: 'AdminMenuItem-AdminLink',
    title: ROUTES.adminRoles.title,
    to: ROUTES.adminRoles.url,
  },
]

interface Props {
  helmetTitle?: string
  children: ReactNode
}

export const AdminPageLayout: FC<Props> = ({ helmetTitle = 'Admin', children }) => {
  return (
    <MainPageLayout topBarContentLeft={<h3>Admin</h3>}>
      <Helmet title={helmetTitle} />
      <SecondaryNav menuItems={ADMIN_MENU_ITEMS} />

      {children}
    </MainPageLayout>
  )
}

AdminPageLayout.displayName = 'AdminPageLayout'
