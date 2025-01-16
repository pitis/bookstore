import { useQuery } from '@tanstack/react-query'
import { mockData } from '@/utils/mockData'

export function useGetBooks(searchText: string) {
  return useQuery({
    queryKey: ['books', searchText],
    queryFn: async () => {
      if (searchText === '') return mockData

      const filteredBooks = mockData.filter(
        (book) =>
          book.title.toLowerCase().includes(searchText.toLowerCase()) ||
          book.author.toLowerCase().includes(searchText.toLowerCase())
      )

      return filteredBooks
    },
    initialData: [],
  })
}
