import React from 'react'

import { UsersContainer } from '../components'
import { UsersPageLayout } from '../layout'

export const UsersPage: React.FC = () => {
  return (
    <UsersPageLayout helmetTitle='Admin/Users'>
      <UsersContainer />
    </UsersPageLayout>
  )
}

UsersPage.displayName = 'UsersPage'

export default UsersPage
