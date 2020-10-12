import React, { FC, ReactNode } from 'react'

interface Props {
  topBarContentRight?: ReactNode
  topBarContentLeft?: ReactNode
}

export const TopBar: FC<Props> = ({ topBarContentRight, topBarContentLeft }) => {
  return (
    <header>
      <div>{topBarContentRight}</div>
      <div>{topBarContentLeft}</div>
    </header>
  )
}

TopBar.displayName = 'TopBar'
