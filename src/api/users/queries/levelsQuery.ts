import { fetchit } from 'src/global'
import { apiSettings } from 'src/settings'

export async function levelsQuery() {
  const response = await fetchit(apiSettings.levelsHttpUrl)

  return response.json()
}
