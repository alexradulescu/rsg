import React from 'react'
import { Helmet } from 'react-helmet'

import { ROUTES, MainPageLayout } from 'src/global'

export const HomePage: React.FC = () => {
  return (
    <MainPageLayout topBarContentLeft={<h3 data-test-selector='MarketsPage-Title'>{ROUTES.home.title}</h3>}>
      <Helmet title={ROUTES.home.title} />
    </MainPageLayout>
  )
}

HomePage.displayName = 'HomePage'

export default HomePage
