import React from 'react';

import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonFooter,
  IonSplitPane,
  IonPage,
  IonButtons,
  IonMenuButton,
} from '@ionic/react';

import { StatusBar, Style } from '@capacitor/status-bar';
import { useGlobalContext } from 'context/GlobalContext';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useBreakPoints } from '@/hooks/useBreakPoints';

import { TabsBar, Menu } from '@/components/ui';

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
  const { theme } = useGlobalContext();
  const { user, signOut } = useAuthenticator((context) => [context.user]);
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
              <IonTitle>Admin</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent className="ion-padding">
            <div className="text-xl font-bold">Backend Environments</div>
            <pre className="mt-4 bg-slate-100 rounded-lg p-4">
              <div>stackCodeName: {process.env.stackCodeName}</div>
              <div>branchName: {process.env.branchName}</div>
              <div className="mt-4 text-lg font-semibold">Authentication</div>
              <div>userPoolId: {process.env.userPoolId}</div>
              <div>userPoolClientId: {process.env.userPoolClientId}</div>
              <div>userPoolRegion: {process.env.userPoolRegion}</div>
              <div>identityPoolId: {process.env.identityPoolId}</div>
              <div className="mt-4 text-lg font-semibold">API</div>
              <div>graphqlURL: {process.env.graphqlURL}</div>
              <div>graphqlApiKey: {process.env.graphqlApiKey}</div>
              <div className="mt-4 text-lg font-semibold">Storage</div>
              <div>bucketName: {process.env.bucketName}</div>
              <div>bucketRegion: {process.env.bucketRegion}</div>
              <div>bucketCloudFront: {process.env.bucketCloudFront}</div>
            </pre>

            <div className="mt-6 text-xl font-bold">Global Environments</div>
            <pre className="mt-2 bg-slate-100 rounded-lg p-4">
              {JSON.stringify({ theme }, null, 4)}
            </pre>

            <div className="mt-6 text-xl font-bold">User</div>
            <pre className="mt-2 bg-slate-100 rounded-lg p-4">
              {JSON.stringify(user.attributes, null, 4)}
            </pre>

            <div className="mt-6 text-xl font-bold">Cognito User</div>
            <pre className="mt-2 bg-slate-100 rounded-lg p-4">
              {JSON.stringify({ user }, null, 4)}
            </pre>

            <button className="btn" onClick={signOut}>
              Sign Out
            </button>
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
