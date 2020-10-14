import React, { FC } from 'react'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'

import { ThemeProps, Theme } from './Theme'

export const ThemeProvider: FC<ThemeProps> = ({ theme, children }) => {
  return <EmotionThemeProvider<Theme> theme={theme}>{children}</EmotionThemeProvider>
}
