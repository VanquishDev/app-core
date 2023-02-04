import React, { useEffect, useState, useRef } from 'react';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonSplitPane,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonFooter,
  IonSegment,
  IonSegmentButton,
  IonSearchbar,
  getConfig,
  IonButton,
  IonIcon,
  IonRefresher,
  IonRefresherContent,
  IonToast,
  IonPage,
  IonModal,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonProgressBar,
} from '@ionic/react';

import { options, search } from 'ionicons/icons';
import { StatusBar, Style } from '@capacitor/status-bar';

import Menu from 'components/Menu';
import SessionListFilter from './SessionListFilter';
import TabsBar from './TabsBar';
import { useGlobalContext } from '@/context/GlobalContext';
import { useScreen } from '@/hooks/useScreen';

import ItemVideo from './Card/ItemVideo';

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addListener(async (status) => {
    try {
      await StatusBar.setStyle({
        style: status.matches ? Style.Dark : Style.Light,
      });
    } catch {}
  });

const App: React.FC = () => {
  const [showSearchbar, setShowSearchbar] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [segment, setSegment] = useState('all');
  const [searchText, setSearchText] = useState('');
  const [showCompleteToast, setShowCompleteToast] = useState(true);
  const [showLateral, setShowLateral] = useState(false);
  const [widthL1, setWidthL1] = useState(0);

  const ios = getConfig()!.get('mode') === 'ios';

  const pageRef = useRef<HTMLElement>(null);
  const ionRefresherRef = useRef<HTMLIonRefresherElement>(null);

  const { theme } = useGlobalContext();
  const { screenWidth } = useScreen();

  const doRefresh = () => {
    setTimeout(() => {
      ionRefresherRef.current!.complete();
      // setShowCompleteToast(true);
    }, 2500);
  };

  const [items, setItems] = useState<string[]>([]);

  const generateItems = () => {
    const newItems = [] as any;
    for (let i = 0; i < 50; i++) {
      newItems.push({
        id: 1 + items.length + i,
        title: 'RM QUADRIL - Fratura Patológica X Traumática - O valor do controle evolutivo.',
        description: 'RM QUADRIL - Fratura Patológica X Traumática - O valor do controle evolutivo jsdhfkjsdb fksdjfb sdhf bsdjhfv jsdv fksj dsjf sdkfsjd fskd i jsdhfkjsdb fksdjfb sdhf bsdjhfv jsdv fksj dsjf sdkfsjd fskd i jsdhfkjsdb fksdjfb sdhf bsdjhfv jsdv fksj dsjf sdkfsjd fskd i jsdhfkjsdb fksdjfb sdhf bsdjhfv jsdv fksj dsjf sdkfsjd fskd i ',
        content: 'Mais informações bla bla bla....',
        createdAt: new Date().toISOString(),
        views: 0,
        isFavorite: false,
        hasLike: false,
        videoProvider: 'vimeo',
        vimeoCode: '782706827',
        points: [
          { time: '06:22', description: 'Pesquisa' },
          { time: '10:54', description: 'Fluxo' },
          { time: '18:53', description: 'Tórax' }
        ],
        author: {
          name: 'Luiz Pecci Neto',
          description: 'Radiologista'
        },
        tags: [
          { id: '1', name: 'Clássicos Típicos' },
          { id: '2', name: 'Ressonância Magnética' },
          { id: '3', name: 'Medicina Esportiva' }
        ],
        comments: [
          { id: '1', content: 'bla bla bla' }
        ],
      });
    }
    setItems([...items, ...newItems]);
  };

  useEffect(() => {
    generateItems();
    setShowLateral(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const l1 = screenWidth - (300 + 720);
    setWidthL1(l1 < 300 ? l1 : 300);
  }, [screenWidth]);

  return (
    <IonApp>
      <IonSplitPane when="lg" contentId="main">
        <Menu />

        <IonPage ref={pageRef} className="ion-page" id="main">
          <IonHeader translucent={true}>
            {false && <IonProgressBar type="indeterminate"></IonProgressBar>}
            <IonToolbar className="opacity-95">
              {!showSearchbar && (
                <IonButtons slot="start">
                  <IonMenuButton />
                </IonButtons>
              )}
              {ios && (
                <IonSegment
                  value={segment}
                  onIonChange={(e) => setSegment(e.detail.value as any)}
                >
                  <IonSegmentButton value="all">Todos</IonSegmentButton>
                  <IonSegmentButton value="favorites">
                    Favoritos
                  </IonSegmentButton>
                </IonSegment>
              )}
              {!ios && !showSearchbar && <IonTitle>Tele Academia</IonTitle>}
              {showSearchbar && (
                <IonSearchbar
                  showCancelButton="always"
                  placeholder="Pesquisar por título, radiologista, id ou acesso."
                  onIonChange={(e: CustomEvent) =>
                    setSearchText(e.detail.value)
                  }
                  onIonCancel={() => setShowSearchbar(false)}
                ></IonSearchbar>
              )}

              <IonButtons slot="end">
                {!ios && !showSearchbar && (
                  <IonButton onClick={() => setShowSearchbar(true)}>
                    <IonIcon slot="icon-only" icon={search}></IonIcon>
                  </IonButton>
                )}
                {!showSearchbar && (
                  <IonButton onClick={() => setShowFilterModal(true)}>
                    {ios ? (
                      'Filter'
                    ) : (
                      <IonIcon icon={options} slot="icon-only" />
                    )}
                  </IonButton>
                )}
              </IonButtons>
            </IonToolbar>

            {!ios && (
              <IonToolbar className="opacity-95">
                <IonSegment
                  value={segment}
                  onIonChange={(e) => setSegment(e.detail.value as any)}
                >
                  <IonSegmentButton value="all">Todos</IonSegmentButton>
                  <IonSegmentButton value="favorites">
                    Favoritos
                  </IonSegmentButton>
                </IonSegment>
              </IonToolbar>
            )}
          </IonHeader>

          <IonContent fullscreen={true}>
            <IonHeader collapse="condense">
              <IonToolbar>
                <IonSearchbar
                  placeholder="Pesquisar por título, radiologista, id ou acesso."
                  onIonChange={(e: CustomEvent) =>
                    setSearchText(e.detail.value)
                  }
                ></IonSearchbar>
              </IonToolbar>
            </IonHeader>

            <IonRefresher
              slot="fixed"
              ref={ionRefresherRef}
              onIonRefresh={doRefresh}
            >
              <IonRefresherContent />
            </IonRefresher>

            <IonToast
              isOpen={showCompleteToast}
              message="Refresh complete"
              duration={2000}
              onDidDismiss={() => setShowCompleteToast(false)}
            />

            <IonList>
              {items.map((item, index) => (
                <div key={item}>
                  <div className="flex justify-center px-4 py-2">
                    <div style={{ maxWidth: 720 }} className="w-full">
                      <ItemVideo item={item} />
                    </div>
                  </div>
                </div>
              ))}
            </IonList>
            <IonInfiniteScroll
              onIonInfinite={(ev) => {
                generateItems();
                setTimeout(() => ev.target.complete(), 500);
              }}
            >
              <IonInfiniteScrollContent></IonInfiniteScrollContent>
            </IonInfiniteScroll>
          </IonContent>

          <IonFooter>
            <TabsBar />
          </IonFooter>

          <IonModal
            isOpen={showFilterModal}
            onDidDismiss={() => setShowFilterModal(false)}
            swipeToClose={true}
            presentingElement={pageRef.current!}
          >
            <SessionListFilter
              onDismissModal={() => setShowFilterModal(false)}
              allTracks={[]}
              filteredTracks={['aaa', 'bbb']}
            />
          </IonModal>
        </IonPage>

        {showLateral && screenWidth > 1220 && (
          <div
            className="border-l-2 p-4"
            style={{ width: widthL1 > 0 ? widthL1 : 0, maxWidth: 300 }}
          >
            <div className="bg-slate-200 rounded-lg p-4">
              Conteúdo adicional
            </div>
          </div>
        )}
      </IonSplitPane>
    </IonApp>
  );
};

export default App;
