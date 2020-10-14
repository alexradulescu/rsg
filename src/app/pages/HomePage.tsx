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
        The styling comes from a small css boilerplate(feel free to ignore it). We do not use Bootstrap but
        rather use a custom, private UI library which we'll provide later on.
      </p>
      <p>
        If one encounters any challenges always discuss with colleagues. Don't just hammer through if
        something is not elegant and feel bad.
      </p>
      <p>Because in the end, bad code, always comes back and bites us ;-).</p>
      <p>You can find the 2 documents in the uploads folder.</p>
      <p>
        Go and read the code, follow the flow of it from <samp>index.tsx</samp> all the way up to the last
        component, enum and interface. It is not that much.
      </p>
      <p>You will find some notes along the way also.</p>
      <p>Last but not least, some of the packages and tool we are using(non-optional)</p>
      <ul>
        <li>
          <a href='https://create-react-app.dev/docs/adding-typescript/' target='blank'>
            React + TS (based on CRA)
          </a>
        </li>
        <li>
          <a href='https://react-query.tanstack.com/' target='blank'>
            React-Query
          </a>
        </li>
        <li>
          <a href='https://recoiljs.org/' target='blank'>
            Recoil
          </a>
        </li>
        <li>Prettier + ESLint(check out README.md and .vscode folder for recommended extensions)</li>
      </ul>
    </MainPageLayout>
  )
}

HomePage.displayName = 'HomePage'

export default HomePage
