import React, { ReactNode, FC } from 'react'
import { Helmet } from 'react-helmet'

import { SecondaryNav, ROUTES, MainPageLayout } from 'src/global'

const USER_MENU_ITEMS = [
  {
    dataTestSelector: 'AdminMenuItem-AdminLink',
    title: ROUTES.users.title,
    to: ROUTES.users.url,
    exact: true,
  },
  {
    dataTestSelector: 'AdminMenuItem-AdminLink',
    title: ROUTES.levels.title,
    to: ROUTES.levels.url,
  },
]

interface Props {
  helmetTitle?: string
  children: ReactNode
}

export const UsersPageLayout: FC<Props> = ({ helmetTitle = 'Users', children }) => {
  return (
    <MainPageLayout topBarContentLeft={<h3>Users</h3>}>
      <Helmet title={helmetTitle} />
      <SecondaryNav menuItems={USER_MENU_ITEMS} />

      {children}
    </MainPageLayout>
  )
}

UsersPageLayout.displayName = 'UsersPageLayout'
