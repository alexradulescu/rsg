import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { ProvidedThemeProps } from '../theme'

export const SpacedRow = styled.div<ProvidedThemeProps>`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: ${({ theme }) => theme.layout.margin.regular} 0;
`

export const Table = styled.table<ProvidedThemeProps>`
  width: 100%;
  margin: ${({ theme }) => theme.layout.margin.regular} 0;
`

export const rightAligned = css`
  text-align: right;
`
