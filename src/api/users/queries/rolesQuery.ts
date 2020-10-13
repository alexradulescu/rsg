import { fetchit } from 'src/global'
import { apiSettings } from 'src/settings'

export async function rolesQuery() {
  const response = await fetchit(apiSettings.rolesHttpUrl)

  return response.json()
}
