import { useQuery } from '@tanstack/react-query'
import { mockData } from '@/utils/mockData'
import useAppStore from '@/stores/cart'

export function useGetBooks(searchText: string) {
  const { stock } = useAppStore()
  const fullQuantity = stock.reduce((acc, item) => acc + item.stock, 0)

  return useQuery({
    queryKey: ['books', searchText, fullQuantity],
    queryFn: async () => {
      if (searchText === '') return stock

      const filteredBooks = stock.filter(
        (book) =>
          book.title.toLowerCase().includes(searchText.toLowerCase()) ||
          book.author.toLowerCase().includes(searchText.toLowerCase())
      )

      return filteredBooks
    },
    initialData: [],
  })
}
