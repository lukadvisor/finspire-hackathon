import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useDataContext } from '../context/dataContext';
import './Result.css';

const Result: React.FC = (props) => {
  const {
    sanguine,
    choleric,
    melancholic,
    phlegmatic,
    done,
    personality,
    personalityDescription
  } = useDataContext();

  console.log(sanguine, choleric, melancholic, phlegmatic);

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>Your Investment Personality</IonTitle>
        </IonToolbar>
      </IonHeader>

      {!done &&
        <IonContent>
          <IonLabel>Please finish the Questionnaire to view the result</IonLabel>
        </IonContent>
      }

      {done &&
        <IonContent fullscreen>
          {/* Investment Personality */}
          <IonCard>
            {personality === "Sanguine" &&
              <IonImg src="/assets/image/1.gif" />
            }
            {personality === "Choleric" &&
              <IonImg src="/assets/image/2.gif" />
            }
            {personality === "Melancholic" &&
              <IonImg src="/assets/image/3.gif" />
            }
            {personality === "Phlegmatic" &&
              <IonImg src="/assets/image/4.gif" />
            }
            <IonCardHeader>
              <IonCardTitle>You are {personality}!</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {personalityDescription}
            </IonCardContent>
          </IonCard>

          <h2>Recommendation</h2>

          <IonImg src="/assets/image/map.png" />

          <IonGrid>
            <IonRow>
              <IonCol>
                <IonCard>
                  <img src="/assets/image/card1.jpg" alt=""/>
                  <IonCardHeader>
                    <IonCardSubtitle>
                      QianHaiJiaLiZhongXin
                    </IonCardSubtitle>
                    <IonCardTitle>
                      湾瑞府 颐湾府 前海嘉里中心
                  </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    8 records
                </IonCardContent>
                  <IonItem>
                    <a href="https://bocvr.netlify.com">
                      <IonButton fill="outline" slot="end">View</IonButton>
                    </a>
                  </IonItem>
                </IonCard>
              </IonCol>
              <IonCol>
                <IonCard>
                  <img src="/assets/image/card2.jpg" alt=""/>
                  <IonCardHeader>
                    <IonCardSubtitle>
                      Hengqin - GrandMixC
                    </IonCardSubtitle>
                    <IonCardTitle>
                      橫琴 - 万象世界
                  </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    15 records
                </IonCardContent>
                  <IonItem>
                    <a href="https://bocvr.netlify.com">
                      <IonButton fill="outline" slot="end">View</IonButton>
                    </a>
                  </IonItem>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>



        </IonContent>
      }
    </IonPage>
  );
};

export default Result;
