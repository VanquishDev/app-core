import React from 'react';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonFooter,
} from '@ionic/react';
import { StatusBar, Style } from '@capacitor/status-bar';

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addListener(async (status) => {
    try {
      await StatusBar.setStyle({
        style: status.matches ? Style.Dark : Style.Light,
      });
    } catch {}
  });

const App = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
    
      </IonContent>

      <IonFooter>
        <IonToolbar>
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonApp>
  );
};

export default App;
