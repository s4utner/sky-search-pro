import { useQuery } from '@tanstack/react-query'
import { getPopularUsers } from '../services/api'

export const useGetPopularUsersQuery = () =>
  useQuery({
    queryFn: getPopularUsers,
    queryKey: ['users', 'popular'],
  })
