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
import { useAuthenticator } from '@aws-amplify/ui-react';

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

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
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

        <div className="mt-6 text-xl font-bold">Current User</div>
        <pre className="mt-2 bg-slate-100 rounded-lg p-4">
          {JSON.stringify({ user }, null, 4)}
        </pre>

        <button className='btn' onClick={signOut}>Sign Out</button>
      </IonContent>
    </IonApp>
  );
};

export default App;
