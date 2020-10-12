import React from 'react'

import { OperatorsContainer } from '../components'
import { AdminPageLayout } from '../layout'

export const OperatorsAdminPage: React.FC = () => {
  return (
    <AdminPageLayout helmetTitle='Admin/Operators'>
      <OperatorsContainer />
    </AdminPageLayout>
  )
}

OperatorsAdminPage.displayName = 'OperatorsAdminPage'

export default OperatorsAdminPage
