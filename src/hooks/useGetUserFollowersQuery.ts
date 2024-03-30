import { useQuery } from '@tanstack/react-query'
import { getUserFollowers } from '../services/api'

export const useGetUserFollowersQuery = (url: string) =>
  useQuery({
    queryFn: () => getUserFollowers(url),
    queryKey: ['followers'],
    enabled: !!url,
  })
