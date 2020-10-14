import React from 'react'
import styled from '@emotion/styled'

export const AuthPageLayout: React.FC = ({ children }) => {
  return (
    <MainWrapper>
      <aside>{children}</aside>
    </MainWrapper>
  )
}

AuthPageLayout.displayName = 'AuthPageLayout'

const MainWrapper = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`
