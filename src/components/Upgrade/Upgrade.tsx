import React, { useEffect, useState, useRef } from 'react';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonSplitPane,
  IonFooter,
  IonPage,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
} from '@ionic/react';

import { StatusBar, Style } from '@capacitor/status-bar';
import { TabsBar, Menu } from '@/components/ui';

import { useGlobalContext } from '@/context/GlobalContext';
import { useBreakPoints } from '@/hooks/useBreakPoints';

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addListener(async (status) => {
    try {
      await StatusBar.setStyle({
        style: status.matches ? Style.Dark : Style.Light,
      });
    } catch {}
  });

const App: React.FC = () => {
  const { theme } = useGlobalContext();
  const { isXs, isSm } = useBreakPoints();

  return (
    <IonApp>
      <IonSplitPane when="lg" contentId="main">
        <Menu />

        <IonPage className="ion-page" id="main">
          <IonHeader translucent={true} collapse="fade">
            <IonToolbar
              color={isXs || isSm ? 'primary' : ''}
              className="opacity-95"
            >
              <IonButtons slot="start">
                <IonMenuButton />
              </IonButtons>
              <IonTitle>Upgrade</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent fullscreen={true} className="ion-padding"></IonContent>

          <IonFooter className="ion-hide-md-up">
            <TabsBar />
          </IonFooter>
        </IonPage>
      </IonSplitPane>
    </IonApp>
  );
};

export default App;
