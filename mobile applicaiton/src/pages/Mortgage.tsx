import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonRippleEffect, IonSelect, IonSelectOption, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useDataContext } from '../context/dataContext';
import './Mortgage.css';

const Result: React.FC = (props) => {
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
                    <IonTitle>Mortgage Loan Application</IonTitle>
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
                        <IonLabel position="stacked">Address <IonText color="danger">*</IonText></IonLabel>
                        <IonInput required type="text" onIonInput={(e: any) => setAddress(e.target.value)}></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonLabel>Plan Type <IonText color="danger">*</IonText></IonLabel>
                        <IonSelect value="brown" okText="Okay" cancelText="Dismiss" onIonChange={(e: any) => setPlan(e.target.value)}>
                            <IonSelectOption value="PLAN_1">PLAN_1</IonSelectOption>
                            <IonSelectOption value="PLAN_2">PLAN_2</IonSelectOption>
                            <IonSelectOption value="PLAN_3">PLAN_3</IonSelectOption>
                        </IonSelect>
                    </IonItem>

                    <IonButton color="warning" expand="block" onClick={() => RunMortgage()}>
                        APPLY
                <IonRippleEffect></IonRippleEffect>
                    </IonButton>
                </IonList>

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Response</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        {mortgageResponse}
                    </IonCardContent>
                </IonCard>

            </IonContent>

        </IonPage>
    );
};

export default Result;
