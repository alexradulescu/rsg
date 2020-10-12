import React, { FC } from 'react'
import styled from '@emotion/styled'
import { RecoilRoot, MutableSnapshot, useRecoilTransactionObserver_UNSTABLE } from 'recoil'

import { ProvidedThemeProps, persistentAtoms } from 'src/global'

import { AppRoutes } from './AppRoutes'

export const AppInner: FC = () => {
  /**
   * NOTE: If any of the persisted atom's value was changed, the new value
   * is saved to localStorage
   * Atoms which are not in the persistedAtoms list are ignored and not persisted.
   */
  useRecoilTransactionObserver_UNSTABLE(({ snapshot, previousSnapshot }) => {
    persistentAtoms.forEach(persistedAtom => {
      const atomLoadable = snapshot.getLoadable(persistedAtom)
      const previousAtomLoadable = previousSnapshot.getLoadable(persistedAtom)

      if (atomLoadable.state === 'hasValue' && atomLoadable.contents !== previousAtomLoadable.contents) {
        localStorage.setItem(persistedAtom.key, JSON.stringify({ value: atomLoadable.contents }))
      }
    })
  })

  return (
    <AppContainer>
      <AppRoutes />
    </AppContainer>
  )
}
export const App: FC = () => {
  /**
   * NOTE: I any atom from the persistedAtoms list is in localStorage,
   * set it to the stored value when initialising the state
   */
  const initializeState = ({ set }: MutableSnapshot) => {
    persistentAtoms.forEach(persistedAtom => {
      const localStoredAtom = localStorage.getItem(persistedAtom.key)
      if (localStoredAtom) {
        set(persistedAtom, JSON.parse(localStoredAtom).value)
      }
    })
  }

  return (
    <RecoilRoot initializeState={initializeState}>
      <AppInner />
    </RecoilRoot>
  )
}

App.displayName = 'App'

/**
 * NOTE: For styling we always use styles components.
 * Plase do NOT inline css ever like: <div style={{"some-property": "some-value"; anotherProperty: "another-value"}} .../>
 */
const AppContainer = styled.main<ProvidedThemeProps>`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow-y: hidden;
  flex-direction: column;
`
