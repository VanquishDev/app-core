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

import { useGlobalContext } from 'context/GlobalContext';
import { Authenticator } from '@aws-amplify/ui-react';

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

  return (
    <Authenticator loginMechanisms={['email']} signUpAttributes={[]}>
      {({ user, signOut }) => (
        <IonApp>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Admin</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent className="ion-padding">
            <div className="text-xl font-bold">Backend Environments</div>
            <pre className="mt-2 bg-slate-100 rounded-lg p-4">
              <div>stackCodeName: {process.env.stackCodeName}</div>
              <div>branchName: {process.env.branchName}</div>
              <div>userPoolId: {process.env.userPoolId}</div>
              <div>userPoolClientId: {process.env.userPoolClientId}</div>
              <div>userPoolRegion: {process.env.userPoolRegion}</div>
              <div>identityPoolId: {process.env.identityPoolId}</div>
              <div>graphqlURL: {process.env.graphqlURL}</div>
              <div>graphqlApiKey: {process.env.graphqlApiKey}</div>
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
              {JSON.stringify({ user }, null, 4)}
            </pre>

            <div className="mt-6 text-xl font-bold">Login</div>
            <pre className="mt-2"></pre>
          </IonContent>

          <IonFooter>
            <IonToolbar>
              <IonTitle>
                <button onClick={signOut}>signOut{user?.username}!</button>
              </IonTitle>
            </IonToolbar>
          </IonFooter>
        </IonApp>
      )}
    </Authenticator>
  );
};

export default App;
