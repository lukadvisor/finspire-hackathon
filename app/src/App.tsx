import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/typography.css';
import { flash, podium, home } from 'ionicons/icons';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useDataContext } from './context/dataContext';
import Questionnaire from './pages/Questionnaire';
import Recommendation from './pages/Recommendation';
import Mortgage from './pages/Mortgage';
import Result from './pages/Result';
import Terms from './pages/Terms';
/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <useDataContext.Provider>
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/realz" render={() => <Redirect to="/" />} exact={true} />
            <Route path="/terms" component={Terms} exact={true} />
            <Route path="/questionnaire" component={Questionnaire} exact={true} />
            <Route path="/recommendation" component={Recommendation} exact={true} />
            <Route path="/mortgage" component={Mortgage} exact={true} />
            <Route path="/" render={() => <Redirect to="/terms" />} exact={true} />
            <Route path="/result" component={Result} exact={true} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="terms" href="/terms">
              <IonIcon icon={flash} />
              <IonLabel>Terms and Conditions</IonLabel>
            </IonTabButton>
            <IonTabButton tab="result" href="/result">
              <IonIcon icon={podium} />
              <IonLabel>Result</IonLabel>
            </IonTabButton>
            <IonTabButton tab="mortgage" href="/mortgage">
              <IonIcon icon={home} />
              <IonLabel>Mortgage</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  </useDataContext.Provider>
);

export default App;
