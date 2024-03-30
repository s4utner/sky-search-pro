import { useQuery } from '@tanstack/react-query'
import { getUserOrganizations } from '../services/api'

export const useGetUserOrganizationsQuery = (url: string) =>
  useQuery({
    queryFn: () => getUserOrganizations(url),
    queryKey: ['organizations'],
    enabled: !!url,
  })
