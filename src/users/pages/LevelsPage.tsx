import React from 'react'

import { LevelsContainer } from '../components'
import { UsersPageLayout } from '../layout'

export const LevelsPage: React.FC = () => {
  return (
    <UsersPageLayout helmetTitle='Admin/Operators'>
      <LevelsContainer />
    </UsersPageLayout>
  )
}

LevelsPage.displayName = 'LevelsPage'

export default LevelsPage
