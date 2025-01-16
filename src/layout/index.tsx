import Cart from '@/components/cart'
import { IonCol, IonContent, IonGrid, IonRow } from '@ionic/react'

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <IonGrid style={{ height: '100%' }}>
      <IonRow style={{ height: '100%' }}>
        <IonCol>{children}</IonCol>
        <IonCol size='auto'>
          <Cart />
        </IonCol>
      </IonRow>
    </IonGrid>
  )
}
