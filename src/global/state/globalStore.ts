import { atom } from 'recoil'

export const userPermissionsState = atom<string[]>({
  key: 'userPermissionsState',
  default: [],
})
