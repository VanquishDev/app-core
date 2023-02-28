import React from 'react';

import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonBadge,
  IonRouterOutlet,
} from '@ionic/react';

import { play, school, chatbubbles, person } from 'ionicons/icons';

export const TabsBar: React.FC = () => (
  <div style={{ height: 55 }} className="opacity-95">
    <IonTabs>
      <IonRouterOutlet></IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={play} aria-hidden="true" color="primary" />
          <IonLabel color="primary">Home</IonLabel>
        </IonTabButton>

        <IonTabButton tab="course" href="/course">
          <IonIcon icon={school} aria-hidden="true" color="primary" />
          <IonLabel color="primary">Cursos</IonLabel>
        </IonTabButton>

        <IonTabButton tab="message" href="/message">
          <IonIcon icon={chatbubbles} aria-hidden="true" color="primary" />
          <IonLabel color="primary">Mensagens</IonLabel>
        </IonTabButton>

        <IonTabButton tab="profile" href="/profile">
          <IonIcon icon={person} aria-hidden="true" color="primary" />
          <IonLabel color="primary">Perfil</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </div>
);

export default TabsBar;
