import { IBook, mockData } from '@/utils/mockData'
import { create } from 'zustand'

interface CartItem extends IBook {
  quantity: number
}

interface Store {
  stock: IBook[]
  cart: CartItem[]
  addToCart: (bookId: number) => void
  removeFromCart: (bookId: number) => void
  boughtCart: () => void
}

const useAppStore = create<Store>((set) => ({
  stock: [...mockData],
  cart: [],
  addToCart: (bookId: number) => {
    set((store) => {
      const book = store.stock.find((b) => b.id === bookId)
      if (!book || book.stock <= 0) return store

      const existingCartItem = store.cart.find((item) => item.id === bookId)
      if (existingCartItem) {
        return {
          cart: store.cart.map((item) =>
            item.id === bookId ? { ...item, quantity: item.quantity + 1 } : item
          ),
          stock: store.stock.map((b) =>
            b.id === bookId ? { ...b, stock: b.stock - 1 } : b
          ),
        }
      }

      return {
        cart: [...store.cart, { ...book, quantity: 1 }],
        stock: store.stock.map((b) =>
          b.id === bookId ? { ...b, stock: b.stock - 1 } : b
        ),
      }
    })
  },

  removeFromCart: (bookId: number) => {
    set((store) => {
      const existingCartItem = store.cart.find((item) => item.id === bookId)
      if (!existingCartItem) return store

      if (existingCartItem.quantity > 1) {
        return {
          cart: store.cart.map((item) =>
            item.id === bookId ? { ...item, quantity: item.quantity - 1 } : item
          ),
          stock: store.stock.map((b) =>
            b.id === bookId ? { ...b, stock: b.stock + 1 } : b
          ),
        }
      }

      return {
        cart: store.cart.filter((item) => item.id !== bookId),
        stock: store.stock.map((b) =>
          b.id === bookId ? { ...b, stock: b.stock + 1 } : b
        ),
      }
    })
  },
  boughtCart: () => {
    set((store) => {
      return {
        cart: [],
      }
    })
  },
}))

export default useAppStore
