import { IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import React from 'react';

const Result: React.FC = (props) => {

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>Recommendation</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonImg src="/assets/image/card1.jpg" />
                <IonCardHeader>
                  <IonCardTitle>
                    Samson
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  fdsadsfsda
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonImg src="/assets/image/map.png" />
      </IonContent>

    </IonPage >
  );
};

export default Result;
