import { RecoilState } from 'recoil'

import { authUserState } from 'src/auth'

import { userPermissionsState } from './globalStore'

/**
 * NOTE: All persisted atoms are imported and listed here
 * Any atom not listed here would not be persisted.
 * Not all atoms need to be persisted.
 */

export const persistentAtoms: RecoilState<any>[] = [authUserState, userPermissionsState]
