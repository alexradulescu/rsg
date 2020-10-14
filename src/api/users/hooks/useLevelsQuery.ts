import { useQuery } from 'react-query'

import { levelsQuery } from '../queries'

export const useLevelsQuery = () => {
  const { isLoading: loading, error, data } = useQuery('levelsQuery', () => levelsQuery())

  return { data, loading, error }
}
