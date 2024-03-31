import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { getUsersByLogin } from '../services/api'

export const useGetUsersByLoginQuery = (login: string, pageNumber: number) =>
  useQuery({
    queryFn: () => getUsersByLogin(login, pageNumber),
    queryKey: ['users', login, pageNumber],
    placeholderData: keepPreviousData,
    enabled: !!login,
  })
