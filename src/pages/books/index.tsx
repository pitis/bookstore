import { useGetBooks } from '@/api/books/hooks'
import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonLoading,
  IonSearchbar,
  IonSpinner,
  IonText,
} from '@ionic/react'
import { useEffect, useState } from 'react'

export default function Books() {
  const [searchText, setSearchText] = useState<string>('')
  const [debouncedSearchText, setDebouncedSearchText] = useState<string>('')

  const {
    data: books,
    isFetched,
    isFetching,
  } = useGetBooks(debouncedSearchText)

  useEffect(() => {
    const debounce = setTimeout(() => {
      setDebouncedSearchText(searchText)
    }, 300)

    return () => {
      clearTimeout(debounce)
    }
  }, [searchText])

  console.log(books)

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
                <IonButton
                  slot='end'
                  color='primary'
                  disabled={book.stock === 0}>
                  Add me to cart
                </IonButton>
              </IonItem>
            ))}
        </IonList>
      </IonContent>
    </>
  )
}
