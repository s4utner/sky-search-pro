import { useQuery } from '@tanstack/react-query'
import { getUserRepositories } from '../services/api'

export const useGetUserRepositoriesQuery = (url: string) =>
  useQuery({
    queryFn: () => getUserRepositories(url),
    queryKey: ['repositories'],
    enabled: !!url,
  })
