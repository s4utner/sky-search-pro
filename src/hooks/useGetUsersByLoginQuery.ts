import { useQuery } from '@tanstack/react-query'
import { getUsersByLogin } from '../services/api'

export const useGetUsersByLoginQuery = (login: string) =>
  useQuery({
    queryFn: () => getUsersByLogin(login),
    queryKey: ['users', login],
    enabled: !!login,
  })
