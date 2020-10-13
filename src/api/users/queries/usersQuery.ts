import { fetchit } from 'src/global'
import { apiSettings } from 'src/settings'

import { ApiUser } from '../interfaces'

export async function usersQuery() {
  const response = await fetchit(apiSettings.usersHttpUrl)

  // const usersData: ApiUser[] = response.json()

  return response.json()
}
