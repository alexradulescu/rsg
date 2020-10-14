import { fetchit } from 'src/global'
import { apiSettings } from 'src/settings'

export async function usersQuery() {
  const response = await fetchit(apiSettings.usersHttpUrl)

  return response.json()
}
