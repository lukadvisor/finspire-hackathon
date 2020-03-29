import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonRippleEffect, IonSelect, IonSelectOption, IonText, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCardSubtitle } from '@ionic/react';
import React, { useState } from 'react';
import { useDataContext } from '../context/dataContext';
import './Mortgage.css';

const Result: React.FC = (props) => {

    const [showResult, setShowResult] = useState(false);

    const {
        setName,
        setId,
        setGender,
        setDob,
        setPhone,
        setAddress,
        setPlan,
        RunMortgage,
        mortgageResponse
    } = useDataContext();

    return (
        <IonPage>
            <IonHeader translucent>
                <IonToolbar>
                    <IonTitle>Virtual Expert</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonList lines="full" class="ion-no-margin ion-no-padding">
                    <IonItem>
                        <IonLabel position="stacked">Name <IonText color="danger">*</IonText></IonLabel>
                        <IonInput required type="text" onIonInput={(e: any) => setName(e.target.value)}></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonLabel position="stacked">ID <IonText color="danger">*</IonText></IonLabel>
                        <IonInput required type="text" onIonInput={(e: any) => setId(e.target.value)}></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonLabel>Gender <IonText color="danger">*</IonText></IonLabel>
                        <IonSelect value="brown" okText="Okay" cancelText="Dismiss" onIonChange={(e: any) => setGender(e.target.value)}>
                            <IonSelectOption value="M">M</IonSelectOption>
                            <IonSelectOption value="F">F</IonSelectOption>
                        </IonSelect>
                    </IonItem>

                    <IonItem>
                        <IonLabel position="stacked">Date of Birth <IonText color="danger">*</IonText></IonLabel>
                        <IonInput required type="date" onIonInput={(e: any) => setDob(e.target.value)}></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonLabel position="stacked">Phone No <IonText color="danger">*</IonText></IonLabel>
                        <IonInput required type="number" onIonInput={(e: any) => setPhone(e.target.value)}></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonLabel position="stacked">Income <IonText color="danger">*</IonText></IonLabel>
                        <IonInput required type="text" onIonInput={(e: any) => setAddress(e.target.value)}></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonLabel position="stacked">Expenditure <IonText color="danger">*</IonText></IonLabel>
                        <IonInput required type="text" onIonInput={(e: any) => setAddress(e.target.value)}></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonLabel position="stacked">Expected Payment Period <IonText color="danger">*</IonText></IonLabel>
                        <IonInput required type="date" onIonInput={(e: any) => setAddress(e.target.value)}></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonLabel>Expected Payment Schedule <IonText color="danger">*</IonText></IonLabel>
                        <IonSelect value="brown" okText="Okay" cancelText="Dismiss" onIonChange={(e: any) => setPlan(e.target.value)}>
                            <IonSelectOption value="PLAN_1">Monthly</IonSelectOption>
                            <IonSelectOption value="PLAN_2">Bi-monthly</IonSelectOption>
                            <IonSelectOption value="PLAN_3">Yearly</IonSelectOption>
                        </IonSelect>
                    </IonItem>

                    <IonButton color="warning" expand="block" onClick={() => {
                        RunMortgage()
                        setShowResult(true)
                    }
                    }>
                        APPLY
                <IonRippleEffect></IonRippleEffect>
                    </IonButton>
                </IonList>

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Result</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        {mortgageResponse}
                    </IonCardContent>
                </IonCard>

                {showResult && (
                    <IonCard>
                        <IonCardContent>
                            <IonGrid>
                                <IonRow>
                                    <IonCol size="4"><IonCardTitle>63</IonCardTitle></IonCol>
                                    <IonCol size="8"><IonCardSubtitle color="warning">9/24/2023</IonCardSubtitle></IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size="4"><b>Beginning Balance:</b></IonCol>
                                    <IonCol size="4"><b>Scheduled Payment:</b></IonCol>
                                    <IonCol size="4"><b>Extra Payment:</b></IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size="4">$102,039.16</IonCol>
                                    <IonCol size="4">$2,121.31</IonCol>
                                    <IonCol size="4">$100.00</IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonCardContent>
                    </IonCard>
                )}

                <IonButton color="warning" expand="block" onClick={() => window.open("https://webchat.botframework.com/embed/convoice-bot/gemini?b=convoice-bot&s=mSHupLvltF0.5YXxafvsd-szE9dcRjqFQt_itglamKz1JHlgXuuCKsQ&username=You", '_blank')}>
                    Talk to Virtual Property Expert
                <IonRippleEffect></IonRippleEffect>
                </IonButton>


            </IonContent>

        </IonPage>
    );
};

export default Result;
