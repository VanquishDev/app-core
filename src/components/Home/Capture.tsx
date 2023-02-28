import React from 'react';

import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonTitle,
  IonContent,
} from '@ionic/react';

interface OwnProps {
  onDismissModal: () => void;
}

interface StateProps {}

type CaptureProps = OwnProps & StateProps & DispatchProps;

interface DispatchProps {}

const Capture: React.FC<CaptureProps> = ({ onDismissModal }) => {
  interface OwnProps {
    onDismissModal: () => void;
  }

  return (
    <>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={onDismissModal}>Cancelar</IonButton>
          </IonButtons>

          <IonTitle>Capture</IonTitle>

        </IonToolbar>
      </IonHeader>
      <IonContent>
    
      </IonContent>
    </>
  );
};

export default Capture;
