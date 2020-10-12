import React, { FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'emotion-theming'

import { defaultTheme } from './global'
import { App } from './app'

export const Root: FC = () => (
  <Router>
    <ThemeProvider theme={defaultTheme}>
      <Helmet />
      <App />
    </ThemeProvider>
  </Router>
)

Root.displayName = 'Root'
