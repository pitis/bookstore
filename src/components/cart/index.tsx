import useAppStore from '@/stores/cart'
import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonText,
  IonToolbar,
} from '@ionic/react'

export default function Cart() {
  const { cart, addToCart, removeFromCart } = useAppStore()

  return (
    <div style={{ width: '350px' }}>
      <IonHeader>
        <IonToolbar>Cart</IonToolbar>
      </IonHeader>

      {!cart.length && <IonText>Cart is empty</IonText>}
      <IonList style={{ height: '100%' }}>
        {cart?.map((cartItem) => (
          <IonItem key={cartItem.id}>
            <IonLabel class='ion-text-wrap'>
              <h2>{cartItem.title}</h2>
              <p>
                <IonText color='medium'>Author: {cartItem.author}</IonText>
              </p>
              <p>
                <IonText color='primary'>
                  Price: ${cartItem.price.toFixed(2)}
                </IonText>
              </p>
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <IonButton
                  slot='end'
                  color='primary'
                  disabled={cartItem.stock === 0}
                  onClick={() => removeFromCart(cartItem.id)}>
                  -
                </IonButton>

                <p>
                  <IonText color='primary'>{cartItem.quantity}</IonText>
                </p>

                <IonButton
                  slot='end'
                  color='primary'
                  disabled={cartItem.stock === 0}
                  onClick={() => addToCart(cartItem.id)}>
                  +
                </IonButton>
              </div>
            </IonLabel>
          </IonItem>
        ))}
      </IonList>
    </div>
  )
}
