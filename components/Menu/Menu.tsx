import React from 'react';
import {
  IonMenu,
  IonContent,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
  IonList,
  IonListHeader,
  IonToggle,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItemGroup,
  IonFooter,
} from '@ionic/react';

import {
  albumsOutline,
  chatbubblesOutline,
  documentTextOutline,
  documentLockOutline,
  exitOutline,
  playOutline,
  shieldCheckmarkOutline,
  personOutline,
  moonOutline,
  sunnyOutline,
  schoolOutline,
  addOutline,
} from 'ionicons/icons';

import cn from 'classnames';
import { useGlobalContext } from '@/context/GlobalContext';

const routes = {
  appPages: [
    { title: 'Home', path: '/', icon: playOutline },
    { title: 'Cursos', path: '/', icon: schoolOutline },
    { title: 'Mensagens', path: '/', icon: chatbubblesOutline },
    { title: 'Adicionar', path: '/', icon: addOutline },
  ],
  accountPages: [
    { title: 'Perfil', path: '/', icon: personOutline },
    { title: 'Upgrade', path: '/', icon: shieldCheckmarkOutline },
  ],
  morePages: [
    { title: 'Tutorial', path: '/', icon: albumsOutline },
    { title: 'Termos de uso', path: '/', icon: documentTextOutline },
    { title: 'Privacidade', path: '/', icon: documentLockOutline },
    { title: 'Desconectar', path: '/', icon: exitOutline },
  ],
};

interface Pages {
  title: string;
  path: string;
  icon: string;
  routerDirection?: string;
}

interface Props {}

const Menu: React.FC<Props> = (props: Props) => {
  const { theme, setTheme } = useGlobalContext();
  function renderlistItems(list: Pages[]) {
    return list
      .filter((route) => !!route.path)
      .map((p) => (
        <IonMenuToggle key={p.title} auto-hide="false">
          <IonItem
            color="tertiary"
            detail={false}
            routerLink={p.path}
            routerDirection="none"
            className={
              location.pathname.startsWith(p.path) ? 'selected' : undefined
            }
          >
            <IonIcon slot="start" icon={p.icon} />
            <IonLabel>{p.title}</IonLabel>
          </IonItem>
        </IonMenuToggle>
      ));
  }

  return (
    <IonMenu contentId="main" color="tertiary" style={{ maxWidth: 300 }}>
      <IonContent forceOverscroll={false} color="tertiary">
        <IonList lines="none" className="ion-no-padding">
          <IonItemGroup>
            <IonListHeader className="ion-padding-top" color="tertiary">
              <IonLabel>Principal</IonLabel>
            </IonListHeader>
            {renderlistItems(routes.appPages)}
          </IonItemGroup>
        </IonList>

        <IonList lines="none" className="ion-no-padding">
          <IonItemGroup>
            <IonListHeader className="ion-padding-top" color="tertiary">
              Minha Conta
            </IonListHeader>
            {renderlistItems(routes.accountPages)}
          </IonItemGroup>
        </IonList>

        <IonList lines="none" className="ion-no-padding">
          <IonItemGroup>
            <IonListHeader className="ion-padding-top" color="tertiary">
              Mais
            </IonListHeader>
            <IonItem color="tertiary">
              <IonIcon
                slot="start"
                icon={theme === 'dark' ? moonOutline : sunnyOutline}
              ></IonIcon>
              {theme === 'light' && <IonLabel>Modo claro</IonLabel>}
              {theme === 'dark' && <IonLabel>Modo escuro</IonLabel>}
              <IonToggle
                checked={theme === 'dark' ? true : false}
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              />
            </IonItem>
            {renderlistItems(routes.morePages)}
          </IonItemGroup>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
