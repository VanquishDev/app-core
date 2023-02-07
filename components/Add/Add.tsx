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
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonListHeader,
  IonButton,
  IonIcon,
} from '@ionic/react';

import { star, arrowForward } from 'ionicons/icons';

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
              <IonTitle>Novo caso</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent fullscreen={true} className="ion-padding">
            <IonList>
              <IonListHeader lines="full">
                <IonLabel>Entre com os dados do caso.</IonLabel>
              </IonListHeader>
              <IonItem className="border-none">
                <IonLabel position="floating">Título</IonLabel>
                <IonInput placeholder=""></IonInput>
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Descrição</IonLabel>
                <IonTextarea placeholder="Enter text"></IonTextarea>
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Mais informações</IonLabel>
                <IonTextarea placeholder=""></IonTextarea>
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Tags</IonLabel>
                <IonInput placeholder=""></IonInput>
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Vimeo Code</IonLabel>
                <IonInput placeholder=""></IonInput>
              </IonItem>
            </IonList>


            <IonButton color="primary">
              <IonIcon slot="end" icon={arrowForward}></IonIcon>
              Continuar
            </IonButton>
          </IonContent>

          <IonFooter className="ion-hide-md-up">
            <TabsBar />
          </IonFooter>
        </IonPage>
      </IonSplitPane>
    </IonApp>
  );
};

export default App;
