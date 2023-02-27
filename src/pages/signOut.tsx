import React, { useEffect } from 'react';
import { IonLoading, IonContent } from '@ionic/react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/router';

export default function AppSignOut() {
  const { signOut } = useAuthenticator((context) => [context.user]);
  const router = useRouter()

  useEffect(()=>{
    const getSignOut = async () => {
      await signOut()
      router.push(`/`)
    }
    getSignOut()
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
