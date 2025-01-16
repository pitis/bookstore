import { useQuery } from '@tanstack/react-query'
import { mockData } from '@/utils/mockData'

export function useGetBooks() {
  return useQuery({
    queryKey: ['books'],
    queryFn: async () => {
      return mockData
    },
    initialData: [],
  })
}
