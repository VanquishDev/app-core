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

import { useAuthenticator } from '@aws-amplify/ui-react';
import { useGlobalContext } from '@/context/GlobalContext';

const routes = {
  appPages: [
    { title: 'Home', path: '/home', icon: playOutline },
    { title: 'Cursos', path: '/course', icon: schoolOutline },
    { title: 'Mensagens', path: '/message', icon: chatbubblesOutline },
    { title: 'Adicionar', path: '/add', icon: addOutline },
  ],
  accountPages: [
    { title: 'Perfil', path: '/profile', icon: personOutline },
    { title: 'Upgrade', path: '/upgrade', icon: shieldCheckmarkOutline },
  ],
  morePages: [
    { title: 'Tutorial', path: '/tutorial', icon: albumsOutline },
    { title: 'Termos de uso', path: '/terms', icon: documentTextOutline },
    { title: 'Privacidade', path: '/privacy', icon: documentLockOutline },
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

  const { user, signOut } = useAuthenticator((context) => [context.user]);

  function renderlistItems(list: Pages[]) {
    return list
      .filter((route) => !!route.path)
      .map((p) => (
        <IonItem
          key={p.path}
          color="primary"
          detail={false}
          routerLink={p.path}
          routerDirection="none"
          className={
            location.pathname.startsWith(p.path) ? 'selected' : undefined
          }
        >
          <IonIcon slot="start" icon={p.icon} />
          <div className="text-lg font-medium">{p.title}</div>
        </IonItem>
      ));
  }

  return (
    <IonMenu contentId="main" color="primary" style={{ maxWidth: 300 }}>
      <IonContent forceOverscroll={false} color="primary">
        <div className="px-4 pt-4 text-3xl font-extrabold">LOGO</div>

        <div>{JSON.stringify(user, null, 4)}</div>

        <IonList lines="none" className="ion-no-padding">
          <IonItemGroup>
            <IonListHeader className="ion-padding-top" color="primary">
              <IonLabel>Principal</IonLabel>
            </IonListHeader>
            {renderlistItems(routes.appPages)}
          </IonItemGroup>
        </IonList>

        <IonList lines="none" className="ion-no-padding">
            <IonItemGroup>
              <IonListHeader className="ion-padding-top" color="primary">
                Minha Conta
              </IonListHeader>
              {renderlistItems(routes.accountPages)}
            </IonItemGroup>
          </IonList>

        <IonList lines="none" className="ion-no-padding">
          <IonItemGroup>
            <IonListHeader className="ion-padding-top" color="primary">
              Mais
            </IonListHeader>
            <IonItem color="primary">
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

            {user && <IonItem
              key="/signOut"
              color="primary"
              detail={false}
              routerLink="/signOut"
              routerDirection="none"
            >
              <IonIcon slot="start" icon={exitOutline} />
              <div className="text-lg font-medium">Desconectar</div>
            </IonItem>}
          </IonItemGroup>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;