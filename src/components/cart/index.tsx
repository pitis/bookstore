import useAppStore from '@/stores/cart'
import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonText,
  IonToast,
  IonToolbar,
} from '@ionic/react'

export default function Cart() {
  const { cart, boughtCart, addToCart, removeFromCart } = useAppStore()

  const totalPrice = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2)

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
        <IonText>
          <h2>Total price: {totalPrice}</h2>
        </IonText>

        <IonButton
          id='buy-toast'
          slot='end'
          color='primary'
          disabled={!cart.length}
          onClick={() => boughtCart()}>
          Buy
        </IonButton>

        <IonToast
          trigger='buy-toast'
          message='Congratulations on your purchase'
          position='top'
          duration={5000}
        />
      </IonList>
    </div>
  )
}
