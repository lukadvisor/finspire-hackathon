import { IonButton, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonProgressBar, IonRadio, IonRadioGroup, IonSlide, IonSlides, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useDataContext } from '../context/dataContext';
import './Questionnaire.css';

const Questionnaire: React.FC = () => {

  const {
    sanguine, 
    setSanguine, 
    choleric,
    setCholeric, 
    melancholic, 
    setMelancholic, 
    phlegmatic, 
    setPhlegmatic,
    cal
  } = useDataContext();

  function nextSlide() {
    let slides: any = document.getElementById('slides');
    slides.lockSwipes(false);
    slides.slideNext();
    slides.lockSwipes(true);

    let content: any = document.getElementById('content');
    content.scrollToTop();
  }

  const slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  const slidesInit = () => {
    let slides: any = document.getElementById('slides');
    slides.lockSwipes(true);
  }

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>Financial Health Questionnaire</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen scroll-y="true" scroll-x="false" id="content">
        <IonSlides options={slideOpts} id="slides" onIonSlidesDidLoad={slidesInit}>

          {/* Q1 */}
          <IonSlide>

            <IonProgressBar color="warning" value={0 / 7} buffer={1 / 7}></IonProgressBar><br />

            <p>Pick a colour that best represents you.</p>

            <IonImg src="/assets/image/slide-1.gif" />

            <IonList>
              <IonRadioGroup>

                <IonItem>
                  <IonLabel>Yellow</IonLabel>
                  <IonRadio onIonSelect={() => {
                    setSanguine(1)
                    nextSlide();
                  }} slot="start" value="1a" />
                </IonItem>

                <IonItem>
                  <IonLabel>Red</IonLabel>
                  <IonRadio onIonSelect={() => {
                    setCholeric(1)
                    nextSlide();
                  }} slot="start" value="1b" />
                </IonItem>

                <IonItem>
                  <IonLabel>Blue</IonLabel>
                  <IonRadio onIonSelect={() => {
                    setMelancholic(1)
                    nextSlide();
                  }} slot="start" value="1c" />
                </IonItem>

                <IonItem>
                  <IonLabel>Green</IonLabel>
                  <IonRadio onIonSelect={() => {
                    setPhlegmatic(1)
                    nextSlide();
                  }} slot="start" value="1d" />
                </IonItem>

              </IonRadioGroup>
            </IonList>

          </IonSlide>

          {/* Q2 */}
          <IonSlide>
            <IonProgressBar color="warning" value={1 / 7} buffer={2 / 7}></IonProgressBar><br />

            <p>How do people usually describe you?</p>

            <IonImg src="/assets/image/slide-2.gif" />

            <IonList>
              <IonRadioGroup>

                <IonItem>
                  <IonLabel>Passionate</IonLabel>
                  <IonRadio onIonSelect={() => {
                    setCholeric(choleric+1);
                    nextSlide();
                  }} slot="start" value="2b" />
                </IonItem>

                <IonItem>
                  <IonLabel>Creative</IonLabel>
                  <IonRadio onIonSelect={() => {
                    setMelancholic(melancholic+1);
                    nextSlide();
                  }} slot="start" value="2c" />
                </IonItem>

                <IonItem>
                  <IonLabel>Sociable</IonLabel>
                  <IonRadio onIonSelect={() => {
                    setSanguine(sanguine+1);
                    nextSlide();
                  }} slot="start" value="2a" />
                </IonItem>

                <IonItem>
                  <IonLabel>Rational</IonLabel>
                  <IonRadio onIonSelect={() => {
                    setPhlegmatic(phlegmatic+1)
                    nextSlide();
                  }} slot="start" value="2d" />
                </IonItem>

              </IonRadioGroup>
            </IonList>
          </IonSlide>

          {/* Q3 */}
          <IonSlide>
            <IonProgressBar color="warning" value={2 / 7} buffer={3 / 7}></IonProgressBar><br />

            <p>Find a role that best suit your current occupation.</p>

            <IonImg src="/assets/image/slide-3.gif" />

            <IonList>
              <IonRadioGroup>

                <IonItem>
                  <IonLabel>Actor / Salesman / Athelete</IonLabel>
                  <IonRadio onIonSelect={() => {
                    setSanguine(sanguine+1);
                    nextSlide();
                  }} slot="start" value="3a" />
                </IonItem>

                <IonItem>
                  <IonLabel>Manager / Producer / Builder</IonLabel>
                  <IonRadio onIonSelect={() => {
                    setCholeric(choleric+1);
                    nextSlide();
                  }} slot="start" value="3b" />
                </IonItem>

                <IonItem>
                  <IonLabel>Musician / Artist / Inventor</IonLabel>
                  <IonRadio onIonSelect={() => {
                    setMelancholic(melancholic+1);
                    nextSlide();
                  }} slot="start" value="3c" />
                </IonItem>

                <IonItem>
                  <IonLabel>Accountant / Tutor / Technician</IonLabel>
                  <IonRadio onIonSelect={() => {
                    setPhlegmatic(phlegmatic+1)
                    nextSlide();
                  }} slot="start" value="3d" />
                </IonItem>

              </IonRadioGroup>
            </IonList>
          </IonSlide>

          {/* Q4 */}
          <IonSlide>
            <IonProgressBar color="warning" value={3 / 7} buffer={4 / 7}></IonProgressBar><br />

            <p>What is the perfect distance between your home and the nearest subway?</p>

            <IonImg src="/assets/image/slide-4.gif" />

            <IonList>
              <IonRadioGroup>

                <IonItem>
                  <IonLabel>I am fine with a bus ride (>30 mins)</IonLabel>
                  <IonRadio onIonSelect={() => {
                    setSanguine(sanguine+1);
                    nextSlide();
                  }} slot="start" value="4a" />
                </IonItem>

                <IonItem>
                  <IonLabel>A short walk (15 mins)</IonLabel>
                  <IonRadio onIonSelect={() => {
                    setPhlegmatic(phlegmatic+1)
                    nextSlide();
                  }} slot="start" value="4d" />
                </IonItem>


                <IonItem>
                  <IonLabel>a short walk (15 mins)</IonLabel>
                  <IonRadio onIonSelect={() => {
                    setMelancholic(melancholic+1);
                    nextSlide();
                  }} slot="start" value="4c" />
                </IonItem>

                <IonItem>
                  <IonLabel>Isn't it downstairs? (5 mins)</IonLabel>
                  <IonRadio onIonSelect={() => {
                    setCholeric(choleric+1);
                    nextSlide();
                  }} slot="start" value="4b" />
                </IonItem>

              </IonRadioGroup>
            </IonList>
          </IonSlide>

          {/* Q5 */}
          <IonSlide>
            <IonProgressBar color="warning" value={4 / 7} buffer={5 / 7}></IonProgressBar><br />

            <p>Which style best describes your dream home?</p>

            <IonImg src="/assets/image/slide-5.gif" />

            <IonList>
              <IonRadioGroup>

                <IonItem>
                  <IonLabel>A Hi-Tech Smart Home</IonLabel>
                  <IonRadio onIonSelect={() => {
                    setMelancholic(melancholic+1);
                    nextSlide();
                  }} slot="start" value="5c" />
                </IonItem>

                <IonItem>
                  <IonLabel>A Glamorous Mansion</IonLabel>
                  <IonRadio onIonSelect={() => {
                    setCholeric(choleric+1);
                    nextSlide();
                  }} slot="start" value="5b" />
                </IonItem>

                <IonItem>
                  <IonLabel>A Retro House</IonLabel>
                  <IonRadio onIonSelect={() => {
                    setPhlegmatic(phlegmatic+1)
                    nextSlide();
                  }} slot="start" value="5d" />
                </IonItem>

                <IonItem>
                  <IonLabel>A Playground</IonLabel>
                  <IonRadio onIonSelect={() => {
                    setSanguine(sanguine+1);
                    nextSlide();
                  }} slot="start" value="5a" />
                </IonItem>

              </IonRadioGroup>
            </IonList>
          </IonSlide>

          {/* Q6 */}
          <IonSlide>
            <IonProgressBar color="warning" value={5 / 7} buffer={6 / 7}></IonProgressBar><br />

            <p>Pick an neighbourhood that you are most comfortable with?</p>

            <IonImg src="/assets/image/slide-6.gif" />

            <IonList>
              <IonRadioGroup>

                <IonItem>
                  <IonLabel>Close to the sea/beach</IonLabel>
                  <IonRadio onIonSelect={() => {
                    setSanguine(sanguine+1);
                    nextSlide();
                  }} slot="start" value="6a" />
                </IonItem>

                <IonItem>
                  <IonLabel>Lots of shopping malls</IonLabel>
                  <IonRadio onIonSelect={() => {
                    setCholeric(choleric+1);
                    nextSlide();
                  }} slot="start" value="6b" />
                </IonItem>

                <IonItem>
                  <IonLabel>Close to nature</IonLabel>
                  <IonRadio onIonSelect={() => {
                    setPhlegmatic(phlegmatic+1)
                    nextSlide();
                  }} slot="start" value="6d" />
                </IonItem>

                <IonItem>
                  <IonLabel>Easy to get amenities</IonLabel>
                  <IonRadio onIonSelect={() => {
                    setMelancholic(melancholic+1);
                    nextSlide();
                  }} slot="start" value="6c" />
                </IonItem>

              </IonRadioGroup>
            </IonList>
          </IonSlide>

          {/* Q7 */}
          <IonSlide>
            <IonProgressBar color="warning" value={6 / 7} buffer={7 / 7}></IonProgressBar><br />

            <p>How many people will you be living with?</p>

            <IonImg src="/assets/image/slide-7.gif" />

            <IonList>
              <IonRadioGroup>

                <IonItem>
                  <IonLabel>With my lover (2)</IonLabel>
                  <IonRadio onIonSelect={() => {
                    setCholeric(choleric+1)
                    nextSlide();
                  }} slot="start" value="12b" />
                </IonItem>

                <IonItem>
                  <IonLabel>I live alone (1)</IonLabel>
                  <IonRadio onIonSelect={() => {
                    setSanguine(sanguine+1);
                    nextSlide();
                  }} slot="start" value="12a" />
                </IonItem>

                <IonItem>
                  <IonLabel>I am planning to expand my family (2 &gt; x &gt; 4)</IonLabel>
                  <IonRadio onIonSelect={() => {
                    setMelancholic(melancholic+1);
                    nextSlide();
                  }} slot="start" value="12c" />
                </IonItem>

                <IonItem>
                  <IonLabel>I am part of a big family (&lt; 4) </IonLabel>
                  <IonRadio onIonSelect={() => {
                    setPhlegmatic(phlegmatic+1)
                    nextSlide();
                  }} slot="start" value="12c" />
                </IonItem>

              </IonRadioGroup>
            </IonList>
          </IonSlide>

          {/* Continue Page */}
          <IonSlide>
            <IonProgressBar color="warning" value={12 / 12} buffer={12 / 12}></IonProgressBar><br />
            <IonImg src="/assets/image/continue.gif" />
            <h2>Ready to See the result?</h2>
            <IonButton routerLink="/result" color="warning" fill="clear" onClick={() => cal()}>Continue <IonIcon slot="end" name="arrow-forward"></IonIcon></IonButton>
          </IonSlide>

        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Questionnaire;
