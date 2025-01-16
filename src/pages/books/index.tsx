import { useGetBooks } from '@/api/books/hooks'
import {
  IonButton,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonText,
} from '@ionic/react'

export default function Books() {
  const { data: books } = useGetBooks()

  return (
    <IonContent>
      <IonList>
        {books.map((book) => (
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
                  {book.stock > 0 ? `In Stock: ${book.stock}` : 'Out of Stock'}
                </IonText>
              </p>
            </IonLabel>
            <IonButton slot='end' color='primary' disabled={book.stock === 0}>
              Add me to cart
            </IonButton>
          </IonItem>
        ))}
      </IonList>
    </IonContent>
  )
}
