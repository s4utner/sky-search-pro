import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { getUsersByLogin } from '../services/api'

export const useGetUsersByLoginQuery = (login: string, pageNumber: number, sortMethod: string) =>
  useQuery({
    queryFn: () => getUsersByLogin(login, pageNumber, sortMethod),
    queryKey: ['users', login, pageNumber, sortMethod],
    placeholderData: keepPreviousData,
    enabled: !!login,
  })
