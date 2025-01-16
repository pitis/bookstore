import { Redirect, Route } from 'react-router-dom'

import {
  IonApp,
  setupIonicReact,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { bookOutline, personOutline } from 'ionicons/icons'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css'

/* Theme variables */
import './theme/variables.css'
import Books from './pages/books'
import Profile from './pages/profile'
import Layout from './layout'

setupIonicReact()

const queryClient = new QueryClient()

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Layout>
              <Redirect exact path='/' to='/books' />
              <Route path='/books' render={() => <Books />} exact={true} />
              <Route path='/profile' render={() => <Profile />} exact={true} />
            </Layout>
          </IonRouterOutlet>

          <IonTabBar slot='bottom'>
            <IonTabButton tab='books' href='/books'>
              <IonIcon icon={bookOutline} />
              <IonLabel>Book Store</IonLabel>
            </IonTabButton>

            <IonTabButton tab='profile' href='/profile'>
              <IonIcon icon={personOutline} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>

    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
)

export default App
