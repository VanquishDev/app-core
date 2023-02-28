import React from 'react';
import {
  IonMenu,
  IonContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonList,
  IonListHeader,
  IonToggle,
  IonItemGroup,
  IonAvatar,
} from '@ionic/react';

import {
  albumsOutline,
  chatbubblesOutline,
  documentTextOutline,
  documentLockOutline,
  logOutOutline,
  playOutline,
  shieldCheckmarkOutline,
  personOutline,
  moonOutline,
  sunnyOutline,
  schoolOutline,
  addOutline,
  bookmarksOutline,
  peopleOutline,
  logInOutline
} from 'ionicons/icons';

import { useAuthenticator } from '@aws-amplify/ui-react';
import { useGlobalContext } from '@/context/GlobalContext';

const routes = {
  appPages: [
    { title: 'Home', path: '/home', icon: playOutline, requiredLogged: false },
    { title: 'Cursos', path: '/course', icon: schoolOutline, requiredLogged: false },
    { title: 'Mensagens', path: '/message', icon: chatbubblesOutline, requiredLogged: true },
  ],
  accountPages: [
    { title: 'Perfil', path: '/profile', icon: personOutline, requiredLogged: true },
    { title: 'Upgrade', path: '/upgrade', icon: shieldCheckmarkOutline, requiredLogged: true },
  ],
  adminPages: [
    { title: 'Usuários', path: '/user', icon: peopleOutline, requiredLogged: true },
    { title: 'Tags', path: '/tag', icon: bookmarksOutline, requiredLogged: true },
  ],
  morePages: [
    { title: 'Tutorial', path: '/tutorial', icon: albumsOutline, requiredLogged: false },
    { title: 'Termos de uso', path: '/terms', icon: documentTextOutline, requiredLogged: false },
    { title: 'Privacidade', path: '/privacy', icon: documentLockOutline, requiredLogged: false },
  ],
};

interface Pages {
  title: string;
  path: string;
  icon: string;
  routerDirection?: string;
  requiredLogged?: boolean
}

interface Props {}

const Menu: React.FC<Props> = (props: Props) => {
  const { theme, setTheme } = useGlobalContext();

  const { user, signOut } = useAuthenticator((context) => [context.user]);

  function renderlistItems(list: Pages[]) {
    return list
      .filter((route) => !!route.path)
      .map((p) => (!p.requiredLogged || (p.requiredLogged && user)) && (
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
        <div className="px-4 pt-4 text-4xl font-extrabold text-white">LOGO</div>
        {user && (
          <div className="pt-5 px-4 flex flex-start gap-2 items-center">
            <div>
              <IonAvatar slot="start" style={{ height: 50, width: 50 }}>
                <img
                  src={'/avatar/user.png'}
                  alt="avatar"
                />
              </IonAvatar>
            </div>
            <div className='flex flex-col justify-start'>
              <div className="text-base text-slate-700 font-semibold">{user?.attributes?.name}</div>
              <div className='-mt-1'><div className="text-xs bg-slate-700 inline px-2 rounded-lg">PRO</div></div>
            </div>
          </div>
        )}

        <IonList lines="none" className="ion-no-padding">
          <IonItemGroup>
            <IonListHeader className="ion-padding-top" color="primary">
              <IonLabel><span className='text-teal-900 font-semibold text-sm'>PRINCIPAL</span></IonLabel>
            </IonListHeader>
            {renderlistItems(routes.appPages)}
          </IonItemGroup>
        </IonList>

        <IonList lines="none" className="ion-no-padding">
          <IonItemGroup>
            <IonListHeader className="ion-padding-top" color="primary">
            <span className='text-teal-900 font-semibold text-sm'>MINHA CONTA</span>
            </IonListHeader>
            {!user && (
              <IonItem
                key="/signIn"
                color="primary"
                detail={false}
                routerLink="/signIn"
                routerDirection="none"
              >
                <IonIcon slot="start" icon={logInOutline} />
                <div className="text-lg font-medium">Entrar</div>
              </IonItem>
            )}            
            {renderlistItems(routes.accountPages)}
            {user && (
              <IonItem
                key="/signOut"
                color="primary"
                detail={false}
                routerLink="/signOut"
                routerDirection="none"
              >
                <IonIcon slot="start" icon={logOutOutline} />
                <div className="text-lg font-medium">Desconectar</div>
              </IonItem>
            )}
          </IonItemGroup>
        </IonList>

        {user && <IonList lines="none" className="ion-no-padding">
          <IonItemGroup>
            <IonListHeader className="ion-padding-top" color="primary">
            <span className='text-teal-900 font-semibold text-sm'>ADMIN</span>
            </IonListHeader>
            {renderlistItems(routes.adminPages)}
          </IonItemGroup>
        </IonList>}

        <IonList lines="none" className="ion-no-padding">
          <IonItemGroup>
            <IonListHeader className="ion-padding-top" color="primary">
            <span className='text-teal-900 font-semibold text-sm'>MAIS</span>
            </IonListHeader>
            {renderlistItems(routes.morePages)}
            <IonItem color="primary">
              <IonIcon
                slot="start"
                icon={theme === 'dark' ? moonOutline : sunnyOutline}
              ></IonIcon>
              {theme === 'light' && <IonLabel><span className="text-lg font-medium">Modo claro</span></IonLabel>}
              {theme === 'dark' && <IonLabel><span className="text-lg font-medium">Modo escuro</span></IonLabel>}
              <IonToggle
                checked={theme === 'dark' ? true : false}
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              />
            </IonItem>


          </IonItemGroup>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
