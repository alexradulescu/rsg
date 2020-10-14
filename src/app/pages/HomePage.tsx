import React from 'react'
import { Helmet } from 'react-helmet'

import { ROUTES, MainPageLayout } from 'src/global'

export const HomePage: React.FC = () => {
  return (
    <MainPageLayout topBarContentLeft={<h3 data-test-selector='MarketsPage-Title'>{ROUTES.home.title}</h3>}>
      <Helmet title={ROUTES.home.title} />

      <h3>Best practices example project</h3>
      <p>This is a short, best practices example project.</p>
      <p>Most of the good stuff is in here, in a very short and not complex form.</p>
      <p>
        Some cases (especially more complex ones) could not be covered, but based on our best practices, the
        complex cases won't be that bad in fact.
      </p>
      <p>
        Still, if one encounters any challenges always discuss with colleagues. Don't just hammer through if
        something is not elegant and feel bad.
      </p>
      <p>Because in the end, bad code, always comes back and bites us ;-).</p>
      <p>You can find the 2 documents in the uploads folder.</p>
      <p>
        Go and read the code, follow the flow of it from <samp>index.tsx</samp> all the way up to the last
        component, enum and interface. It is not that much.
      </p>
      <p>You will find some notes along the way also.</p>
    </MainPageLayout>
  )
}

HomePage.displayName = 'HomePage'

export default HomePage
