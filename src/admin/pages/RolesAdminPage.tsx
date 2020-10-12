import React from 'react'

import { RolesContainer } from '../components'
import { AdminPageLayout } from '../layout'

export const RolesAdminPage: React.FC = () => {
  return (
    <AdminPageLayout helmetTitle='Admin/Operators'>
      <RolesContainer />
    </AdminPageLayout>
  )
}

RolesAdminPage.displayName = 'RolesAdminPage'

export default RolesAdminPage
