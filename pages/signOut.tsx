import React, { useEffect } from 'react';
import { IonLoading, IonContent } from '@ionic/react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/router';

export default function AppSignOut() {
  const { signOut } = useAuthenticator((context) => [context.user]);
  const router = useRouter()

  useEffect(()=>{
    signOut()
    router.push(`https://${process.env.domain}/`)
  },[router, signOut])

  return (
    <IonContent>
      <IonLoading
        cssClass=""
        isOpen={true}
        message={'Desconectando...'}
        duration={5000}
      />
    </IonContent>
  );
}
