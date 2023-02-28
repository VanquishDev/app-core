declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lav-recorder': any;
    }
  }
}

import React, { useRef, useEffect, useState } from 'react';

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

  const ref = useRef();
  const [loadedFfmpeg, setloadedFfmpeg] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const loadScript = async () => {
      if (isMounted && !loadedFfmpeg) {
        const scriptTag = document.createElement('script');
        scriptTag.src = '/ffmpeg/ffmpeg.min.js';
        scriptTag.addEventListener('load', () => setloadedFfmpeg(true));
        document.body.appendChild(scriptTag);
      }
    };
    loadScript();
    return () => {
      isMounted = false;
      setloadedFfmpeg(false);
    };
  }, []);

  useEffect(() => {
    if (loadedFfmpeg) {
      let isMounted = true;
      const loadScript = async () => {
        if (isMounted && !loaded) {
          const scriptTag = document.createElement('script');
          scriptTag.src = '/lavsw/lav_recorder.js';
          scriptTag.addEventListener('load', () => setLoaded(true));
          document.body.appendChild(scriptTag);
        }
      };
      loadScript();
      return () => {
        isMounted = false;
        setLoaded(false);
      };
    }
  }, [loadedFfmpeg]);

  useEffect(() => {
    if (!loaded || !ref.current) return;
    const current = ref.current as any;
    current.addEventListener('finalize', (e: any) => {
      console.log(e);
    });
    return () => {
      current.removeEventListener('finalize', (e: any) => {
        console.log(e);
      });
    };
  }, [loaded]);

  return (
    <div >
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={onDismissModal}>Cancelar</IonButton>
          </IonButtons>

          <IonTitle>Capture</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div
          id="conteudo"
          style={{
            position: 'absolute',
            margin: 0,
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            overflow: 'hidden',
            userSelect: 'none',
            backgroundColor: 'black',
            color: 'white',
          }}
        >
          <lav-recorder
            id="lavrec"
            refid="cabecalho"
            ref={ref}
            logoSrc={null}
            startVideo={null}
            endVideo={null}
            transcodeMp4={'false'}
            screenCapOn="true"
            logLevel={3}
            style={{
              display: 'block',
              width: '100%',
              height: 500,
              backgroundImage: `url("/pacs_station.jpg")`,
            }}
          >
            <h1 style={{ textAlign: 'center' }}>
              Lav Recorder não suportado pelo Navegador
            </h1>
          </lav-recorder>
        </div>
      </IonContent>
    </div>
  );
};

export default Capture;
