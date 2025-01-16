interface IBook {
  id: number | string
  title: string
  author: string
  price: number
  stock: number
}

export const mockData: IBook[] = [
  {
    id: 1,
    title: 'React for Beginners',
    author: 'John Doe',
    price: 19.99,
    stock: 5,
  },
  {
    id: 2,
    title: 'Advanced JavaScript',
    author: 'Jane Smith',
    price: 29.99,
    stock: 3,
  },
  {
    id: 3,
    title: 'Understanding TypeScript',
    author: 'Michael Brown',
    price: 24.99,
    stock: 7,
  },
  {
    id: 4,
    title: 'Mastering Node.js',
    author: 'Sarah Williams',
    price: 34.99,
    stock: 2,
  },
  {
    id: 5,
    title: 'CSS for Dummies',
    author: 'Emily Davis',
    price: 15.99,
    stock: 8,
  },
  {
    id: 6,
    title: 'Web Performance Optimization',
    author: 'David Johnson',
    price: 39.99,
    stock: 4,
  },
  {
    id: 7,
    title: 'React Native in Action',
    author: 'Richard Lee',
    price: 49.99,
    stock: 6,
  },
  {
    id: 8,
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    price: 14.99,
    stock: 10,
  },
  {
    id: 9,
    title: 'Building Scalable Web Applications',
    author: 'Anna Taylor',
    price: 29.99,
    stock: 3,
  },
  {
    id: 10,
    title: 'Python for Data Science',
    author: 'Chris Martin',
    price: 39.99,
    stock: 5,
  },
]
