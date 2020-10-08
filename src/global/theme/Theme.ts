import { RecursivePartial } from '../types'
import { colors } from './colors'
import { fonts } from './fonts'
import { layout } from './layout'

export const defaultTheme = {
  colors,
  fonts,
  layout,
}

export type Theme = typeof defaultTheme

export type ColorsTheme = RecursivePartial<typeof colors>
export type FontsTheme = RecursivePartial<typeof fonts>
export type LayoutTheme = RecursivePartial<typeof layout>
export interface ThemeProps {
  theme: Theme
}

// The app is wrapped in a provider and all styled components already implicitly
// have access to the `theme` prop without it needing to be passed in.
export type ProvidedThemeProps = Partial<ThemeProps>
