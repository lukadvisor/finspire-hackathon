import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonRippleEffect, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Terms.css';

const Terms: React.FC = () => {
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>RealZ</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="welcome-card">
          <img src="/assets/image/terms.gif" alt="" />
          <IonCardHeader>
            <IonCardSubtitle>Get Started</IonCardSubtitle>
            <IonCardTitle>Welcome to RealZ</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              By clicking 'Accept', I confirm that I acknowledge and agree to the terms and conditions below.
            </p><br />

            <b>LEGAL INFORMATION FOR INVESTORS OF HONG KONG</b><br /><br />

            <p>
              By accessing this website and the products, services, information, tools and materials that it contains or describes, you acknowledge that you have understood and accept the following terms and conditions of use. Please read these terms and conditions of use carefully before using this website. This website is owned and operated by RealZ (as this term is defined hereinafter). You may use the materials on this website solely for personal, informational and non-commercial purposes. All rights not expressly granted in these terms and conditions of use are reserved by RealZ.
            </p><br /><br />

            <p>
              This website includes information on the RealZ Asset Management which are currently registered for public sale in Hong Kong. It is your responsibility to be aware of and to observe all applicable laws and regulations of any relevant jurisdiction.
            </p><br /><br />

            <b>IMPORTANT INFORMATION on RealZ</b><br /><br />

            <p>
              RealZ Funds is an umbrella fund under the UCITS regulations and has within it different funds investing in various investments, such as but not limited to fixed income instruments, securities, and financial derivative instruments. Each fund has a different investment objective and/or risk profile.
            </p><br />

            <ul>
              <li>
                The funds may invest primarily in various kinds of fixed income instruments.
              </li>
              <li>
                The funds may invest extensively in financial derivative instruments which may involve additional risks (e.g. market, counterparty, liquidity, leverage and volatility risks).
              </li>
            </ul>

            <IonButton routerLink="/questionnaire" color="warning" expand="block">
              Accept
                <IonRippleEffect></IonRippleEffect>
            </IonButton>
          </IonCardContent>


        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Terms;
