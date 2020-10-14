import React, { ReactNode } from 'react'
import styled from '@emotion/styled'

import { SecondaryNav, TopBar, MainFooter } from '../components'
import { ROUTES } from '../constants'

const GLOBAL_MENU_ITEMS = [
  {
    dataTestSelector: 'MainMenuItem-HomeLink',
    title: ROUTES.home.title,
    to: ROUTES.home.url,
    exact: true,
  },
  {
    dataTestSelector: 'MainMenuItem-UsersLink',
    title: ROUTES.users.title,
    to: ROUTES.users.url,
  },
]

interface Props {
  topBarContentLeft: ReactNode
  footerContent?: ReactNode
}

export const MainPageLayout: React.FC<Props> = ({ topBarContentLeft, footerContent, children }) => {
  return (
    <>
      <TopBar
        topBarContentRight={topBarContentLeft}
        topBarContentLeft={<SecondaryNav menuItems={GLOBAL_MENU_ITEMS} />}
      />
      <Main>{children}</Main>
      <MainFooter />
    </>
  )
}

MainPageLayout.displayName = 'MainPageLayout'

const Main = styled.div`
  overflow: auto;
`
