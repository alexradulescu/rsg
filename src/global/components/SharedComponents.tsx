import styled from '@emotion/styled'

import { ProvidedThemeProps } from '../theme'

export const SpacedRow = styled.div<ProvidedThemeProps>`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: ${({ theme }) => theme.layout.margin.regular} 0;
`

export const Table = styled.table<ProvidedThemeProps>`
  margin: ${({ theme }) => theme.layout.margin.regular} 0;
`

export const RightAligned = styled.div`
  text-align: right;
`
