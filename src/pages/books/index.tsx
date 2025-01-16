import { useGetBooks } from '@/api/books/hooks'
import useAppStore from '@/stores/cart'
import { IBook } from '@/utils/mockData'
import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonSearchbar,
  IonSpinner,
  IonText,
  IonToast,
} from '@ionic/react'
import { useEffect, useState } from 'react'
import { v4 } from 'uuid'

export default function Books() {
  const [isToastOpen, setIsToastOpen] = useState<boolean>(false)
  const [searchText, setSearchText] = useState<string>('')
  const [debouncedSearchText, setDebouncedSearchText] = useState<string>('')

  const {
    data: books,
    isFetching,
    isFetched,
  } = useGetBooks(debouncedSearchText)

  const { addToCart } = useAppStore()

  function add(book: IBook) {
    if (!book.stock) {
      setIsToastOpen(true)
      return
    }

    addToCart(book.id)
  }

  useEffect(() => {
    const debounce = setTimeout(() => {
      setDebouncedSearchText(searchText)
    }, 300)

    return () => {
      clearTimeout(debounce)
    }
  }, [searchText])

  return (
    <>
      <IonHeader>
        <IonSearchbar
          placeholder='Search for a book...'
          showClearButton='always'
          value={searchText}
          onIonInput={(e) => setSearchText(e.detail.value!)}
        />
      </IonHeader>

      <IonContent>
        <IonList style={{ textAlign: 'center' }}>
          {isFetching && <IonSpinner />}

          {isFetched &&
            books?.map((book) => (
              <IonItem key={book.id}>
                <IonLabel class='ion-text-wrap'>
                  <h2>{book.title}</h2>
                  <p>
                    <IonText color='medium'>Author: {book.author}</IonText>
                  </p>
                  <p>
                    <IonText color='primary'>
                      Price: ${book.price.toFixed(2)}
                    </IonText>
                  </p>
                  <p>
                    <IonText color={book.stock > 0 ? 'success' : 'danger'}>
                      {book.stock > 0
                        ? `In Stock: ${book.stock}`
                        : 'Out of Stock'}
                    </IonText>
                  </p>
                </IonLabel>
                <IonButton slot='end' color='primary' onClick={() => add(book)}>
                  Add me to cart
                </IonButton>
              </IonItem>
            ))}
        </IonList>
        <IonToast
          isOpen={isToastOpen}
          position='top'
          message='Desired quantity exceeds the available stock.'
          onDidDismiss={() => setIsToastOpen(false)}
          duration={5000}
        />
      </IonContent>
    </>
  )
}
