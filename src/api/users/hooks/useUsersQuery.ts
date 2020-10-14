import { useQuery } from 'react-query'

import { usersQuery } from '../queries'

export const useUsersQuery = () => {
  const { isLoading: loading, error, data } = useQuery('usersQuery', () => usersQuery())

  return { data, loading, error }
}
