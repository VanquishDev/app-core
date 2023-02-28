/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from 'react';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonSplitPane,
  IonFooter,
  IonPage,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonList,
  IonItem,
  IonLabel,
  IonListHeader,
  IonSpinner,
  IonButton,
  IonIcon,
  useIonAlert,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  useIonActionSheet,
} from '@ionic/react';

import { addOutline, create, trash } from 'ionicons/icons';
import type { OverlayEventDetail } from '@ionic/core';

import { StatusBar, Style } from '@capacitor/status-bar';
import { TabsBar, Menu } from '@/components/ui';

import { useGlobalContext } from '@/context/GlobalContext';
import { useBreakPoints } from '@/hooks/useBreakPoints';

import { useTag } from '@/hooks/useTag';
import { TagTypes, TagStatus } from '@/API';

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
  const { theme } = useGlobalContext();
  const { isXs, isSm } = useBreakPoints();

  const refSliding1 = useRef() as any;
  const refSliding2 = useRef() as any;
  const refSliding3 = useRef() as any;
  const refSliding4 = useRef() as any;
  const refSliding5 = useRef() as any;

  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [loading3, setLoading3] = useState(true);
  const [loading4, setLoading4] = useState(true);
  const [loading5, setLoading5] = useState(true);

  const [modalities, setModalities] = useState([] as any);
  const [specialties, setSpecialties] = useState([] as any);
  const [regions, setRegions] = useState([] as any);
  const [groups, setGroups] = useState([] as any);
  const [areas, setAreas] = useState([] as any);

  const [showAlert, setShowAlert] = useState(false);

  const { listTagsByTypeName, createTag, deleteTag, updateTag } = useTag();
  const [presentAlert] = useIonAlert();
  const [present] = useIonActionSheet();

  const fetchModalities = async () => {
    setLoading1(true);
    const { items } = await listTagsByTypeName({
      type: TagTypes.MODALITIES,
      limit: 1000,
    });
    setModalities(items);
    setLoading1(false);
    if (refSliding1.current) {
      refSliding1.current.closeOpened();
    }
  };

  const fetchSpecialties = async () => {
    setLoading2(true);
    const { items } = await listTagsByTypeName({
      type: TagTypes.SPECIALTIES,
      limit: 1000,
    });
    setSpecialties(items);
    setLoading2(false);
    if (refSliding2.current) {
      refSliding2.current.closeOpened();
    }
  };

  const fetchRegions = async () => {
    setLoading3(true);
    const { items } = await listTagsByTypeName({
      type: TagTypes.REGIONS,
      limit: 1000,
    });
    setRegions(items);
    setLoading3(false);
    if (refSliding3.current) {
      refSliding3.current.closeOpened();
    }
  };

  const fetchGroups = async () => {
    setLoading4(true);
    const { items } = await listTagsByTypeName({
      type: TagTypes.GROUPS,
      limit: 1000,
    });
    setGroups(items);
    setLoading4(false);
    if (refSliding4.current) {
      refSliding4.current.closeOpened();
    }
  };

  const fetchAreas = async () => {
    setLoading5(true);
    const { items } = await listTagsByTypeName({
      type: TagTypes.AREAS,
      limit: 1000,
    });
    setAreas(items);
    setLoading5(false);
    if (refSliding5.current) {
      refSliding5.current.closeOpened();
    }
  };

  useEffect(() => {
    fetchModalities();
    fetchSpecialties();
    fetchRegions();
    fetchGroups();
    fetchAreas();
  }, []);

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
              <IonTitle>Tags</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent fullscreen={true} className="ion-padding">
            <IonList lines="full">
              <IonListHeader mode="ios">
                <IonLabel>Modalidades</IonLabel>
                <IonButton
                  shape="round"
                  fill="outline"
                  onClick={() =>
                    presentAlert({
                      mode: 'ios',
                      header: 'Nova modalidade',
                      buttons: [
                        {
                          text: 'Cancelar',
                          role: 'cancel',
                          handler: (data) => {},
                        },
                        {
                          text: 'Adicionar',
                          handler: async (data) => {
                            if (data) {
                              await createTag({
                                type: TagTypes.MODALITIES,
                                status: TagStatus.ON,
                                name: data[0].trim(),
                              });
                              fetchModalities();
                            }
                          },
                        },
                      ],
                      inputs: [
                        {
                          placeholder: 'Nome',
                        },
                      ],
                    })
                  }
                >
                  <IonIcon slot="start" icon={addOutline} />
                  Adicionar
                </IonButton>
              </IonListHeader>
              {loading1 && (
                <IonItem>
                  <IonSpinner></IonSpinner>
                </IonItem>
              )}
              {!loading1 && !modalities.length && (
                <IonItem>
                  <IonLabel>Nenhuma modalidade cadastrada.</IonLabel>
                </IonItem>
              )}
              {modalities.map((t: any) => (
                <IonItemSliding
                  key={t.id}
                  ref={(element) => {
                    refSliding1.current = element;
                  }}
                >
                  <IonItem>
                    <IonLabel>{t.name}</IonLabel>
                  </IonItem>
                  <IonItemOptions side="end">
                    <IonItemOption
                      onClick={() =>
                        presentAlert({
                          mode: 'ios',
                          header: 'Alterar modalidade',
                          subHeader: t.name,
                          buttons: [
                            {
                              text: 'Cancelar',
                              role: 'cancel',
                              handler: (data) => {},
                            },
                            {
                              text: 'Alterar',
                              handler: async (data) => {
                                if (data) {
                                  await updateTag({
                                    id: t.id,
                                    name: data[0].trim(),
                                  });
                                  fetchModalities();
                                }
                              },
                            },
                          ],
                          inputs: [
                            {
                              placeholder: 'Nome',
                            },
                          ],
                        })
                      }
                    >
                      <IonIcon slot="icon-only" icon={create}></IonIcon>
                    </IonItemOption>
                    <IonItemOption
                      mode="ios"
                      color="danger"
                      onClick={() =>
                        present({
                          mode: 'ios',
                          header: 'Confirma deletar?',
                          subHeader: t.name,
                          buttons: [
                            {
                              text: 'Sim',
                              role: 'destructive',
                              data: {
                                action: 'delete',
                              },
                            },
                            {
                              text: 'Não',
                              role: 'cancel',
                              data: {
                                action: 'cancel',
                              },
                            },
                          ],
                          onDidDismiss: async ({ detail }) => {
                            const { data } = detail;
                            const { action } = data;
                            if (action === 'delete') {
                              await deleteTag({ id: t.id });
                              fetchModalities();
                            }
                          },
                        })
                      }
                    >
                      <IonIcon slot="icon-only" icon={trash}></IonIcon>
                    </IonItemOption>
                  </IonItemOptions>
                </IonItemSliding>
              ))}
            </IonList>

            <IonList lines="full">
              <IonListHeader mode="ios">
                <IonLabel>Especialidades</IonLabel>
                <IonButton
                  shape="round"
                  fill="outline"
                  onClick={() =>
                    presentAlert({
                      mode: 'ios',
                      header: 'Nova especialidade',
                      buttons: [
                        {
                          text: 'Cancelar',
                          role: 'cancel',
                          handler: (data) => {},
                        },
                        {
                          text: 'Adicionar',
                          handler: async (data) => {
                            if (data) {
                              await createTag({
                                type: TagTypes.SPECIALTIES,
                                status: TagStatus.ON,
                                name: data[0].trim(),
                              });
                              fetchSpecialties();
                            }
                          },
                        },
                      ],
                      inputs: [
                        {
                          placeholder: 'Nome',
                        },
                      ],
                    })
                  }
                >
                  <IonIcon slot="start" icon={addOutline} />
                  Adicionar
                </IonButton>
              </IonListHeader>
              {loading2 && (
                <IonItem>
                  <IonSpinner></IonSpinner>
                </IonItem>
              )}
              {!loading2 && !specialties.length && (
                <IonItem>
                  <IonLabel>Nenhuma especialidade cadastrada.</IonLabel>
                </IonItem>
              )}
              {specialties.map((t: any) => (
                <IonItemSliding
                  key={t.id}
                  ref={(element) => {
                    refSliding2.current = element;
                  }}
                >
                  <IonItem>
                    <IonLabel>{t.name}</IonLabel>
                  </IonItem>
                  <IonItemOptions side="end">
                    <IonItemOption
                      onClick={() =>
                        presentAlert({
                          mode: 'ios',
                          header: 'Alterar especialidade',
                          subHeader: t.name,
                          buttons: [
                            {
                              text: 'Cancelar',
                              role: 'cancel',
                              handler: (data) => {},
                            },
                            {
                              text: 'Alterar',
                              handler: async (data) => {
                                if (data) {
                                  await updateTag({
                                    id: t.id,
                                    name: data[0].trim(),
                                  });
                                  fetchSpecialties();
                                }
                              },
                            },
                          ],
                          inputs: [
                            {
                              placeholder: 'Nome',
                            },
                          ],
                        })
                      }
                    >
                      <IonIcon slot="icon-only" icon={create}></IonIcon>
                    </IonItemOption>
                    <IonItemOption
                      mode="ios"
                      color="danger"
                      onClick={() =>
                        present({
                          mode: 'ios',
                          header: 'Confirma deletar?',
                          subHeader: t.name,
                          buttons: [
                            {
                              text: 'Sim',
                              role: 'destructive',
                              data: {
                                action: 'delete',
                              },
                            },
                            {
                              text: 'Não',
                              role: 'cancel',
                              data: {
                                action: 'cancel',
                              },
                            },
                          ],
                          onDidDismiss: async ({ detail }) => {
                            const { data } = detail;
                            const { action } = data;
                            if (action === 'delete') {
                              await deleteTag({ id: t.id });
                              fetchSpecialties();
                            }
                          },
                        })
                      }
                    >
                      <IonIcon slot="icon-only" icon={trash}></IonIcon>
                    </IonItemOption>
                  </IonItemOptions>
                </IonItemSliding>
              ))}
            </IonList>

            <IonList lines="full">
              <IonListHeader mode="ios">
                <IonLabel>Regiões de interesses</IonLabel>
                <IonButton
                  shape="round"
                  fill="outline"
                  onClick={() =>
                    presentAlert({
                      mode: 'ios',
                      header: 'Nova região',
                      buttons: [
                        {
                          text: 'Cancelar',
                          role: 'cancel',
                          handler: (data) => {},
                        },
                        {
                          text: 'Adicionar',
                          handler: async (data) => {
                            if (data) {
                              await createTag({
                                type: TagTypes.REGIONS,
                                status: TagStatus.ON,
                                name: data[0].trim(),
                              });
                              fetchRegions();
                            }
                          },
                        },
                      ],
                      inputs: [
                        {
                          placeholder: 'Nome',
                        },
                      ],
                    })
                  }
                >
                  <IonIcon slot="start" icon={addOutline} />
                  Adicionar
                </IonButton>
              </IonListHeader>
              {loading3 && (
                <IonItem>
                  <IonSpinner></IonSpinner>
                </IonItem>
              )}
              {!loading3 && !regions.length && (
                <IonItem>
                  <IonLabel>Nenhuma região cadastrada.</IonLabel>
                </IonItem>
              )}
              {regions.map((t: any) => (
                <IonItemSliding
                  key={t.id}
                  ref={(element) => {
                    refSliding3.current = element;
                  }}
                >
                  <IonItem>
                    <IonLabel>{t.name}</IonLabel>
                  </IonItem>
                  <IonItemOptions side="end">
                    <IonItemOption
                      onClick={() =>
                        presentAlert({
                          mode: 'ios',
                          header: 'Alterar região',
                          subHeader: t.name,
                          buttons: [
                            {
                              text: 'Cancelar',
                              role: 'cancel',
                              handler: (data) => {},
                            },
                            {
                              text: 'Alterar',
                              handler: async (data) => {
                                if (data) {
                                  await updateTag({
                                    id: t.id,
                                    name: data[0].trim(),
                                  });
                                  fetchRegions();
                                }
                              },
                            },
                          ],
                          inputs: [
                            {
                              placeholder: 'Nome',
                            },
                          ],
                        })
                      }
                    >
                      <IonIcon slot="icon-only" icon={create}></IonIcon>
                    </IonItemOption>
                    <IonItemOption
                      mode="ios"
                      color="danger"
                      onClick={() =>
                        present({
                          mode: 'ios',
                          header: 'Confirma deletar?',
                          subHeader: t.name,
                          buttons: [
                            {
                              text: 'Sim',
                              role: 'destructive',
                              data: {
                                action: 'delete',
                              },
                            },
                            {
                              text: 'Não',
                              role: 'cancel',
                              data: {
                                action: 'cancel',
                              },
                            },
                          ],
                          onDidDismiss: async ({ detail }) => {
                            const { data } = detail;
                            const { action } = data;
                            if (action === 'delete') {
                              await deleteTag({ id: t.id });
                              fetchRegions();
                            }
                          },
                        })
                      }
                    >
                      <IonIcon slot="icon-only" icon={trash}></IonIcon>
                    </IonItemOption>
                  </IonItemOptions>
                </IonItemSliding>
              ))}
            </IonList>

            <IonList lines="full">
              <IonListHeader mode="ios">
                <IonLabel>Grupos de interesses</IonLabel>
                <IonButton
                  shape="round"
                  fill="outline"
                  onClick={() =>
                    presentAlert({
                      mode: 'ios',
                      header: 'Novo grupo',
                      buttons: [
                        {
                          text: 'Cancelar',
                          role: 'cancel',
                          handler: (data) => {},
                        },
                        {
                          text: 'Adicionar',
                          handler: async (data) => {
                            if (data) {
                              await createTag({
                                type: TagTypes.GROUPS,
                                status: TagStatus.ON,
                                name: data[0].trim(),
                              });
                              fetchGroups();
                            }
                          },
                        },
                      ],
                      inputs: [
                        {
                          placeholder: 'Nome',
                        },
                      ],
                    })
                  }
                >
                  <IonIcon slot="start" icon={addOutline} />
                  Adicionar
                </IonButton>
              </IonListHeader>
              {loading4 && (
                <IonItem>
                  <IonSpinner></IonSpinner>
                </IonItem>
              )}
              {!loading4 && !groups.length && (
                <IonItem>
                  <IonLabel>Nenhum grupo cadastrado.</IonLabel>
                </IonItem>
              )}
              {groups.map((t: any) => (
                <IonItemSliding
                  key={t.id}
                  ref={(element) => {
                    refSliding4.current = element;
                  }}
                >
                  <IonItem>
                    <IonLabel>{t.name}</IonLabel>
                  </IonItem>
                  <IonItemOptions side="end">
                    <IonItemOption
                      onClick={() =>
                        presentAlert({
                          mode: 'ios',
                          header: 'Alterar grupo',
                          subHeader: t.name,
                          buttons: [
                            {
                              text: 'Cancelar',
                              role: 'cancel',
                              handler: (data) => {},
                            },
                            {
                              text: 'Alterar',
                              handler: async (data) => {
                                if (data) {
                                  await updateTag({
                                    id: t.id,
                                    name: data[0].trim(),
                                  });
                                  fetchGroups();
                                }
                              },
                            },
                          ],
                          inputs: [
                            {
                              placeholder: 'Nome',
                            },
                          ],
                        })
                      }
                    >
                      <IonIcon slot="icon-only" icon={create}></IonIcon>
                    </IonItemOption>
                    <IonItemOption
                      mode="ios"
                      color="danger"
                      onClick={() =>
                        present({
                          mode: 'ios',
                          header: 'Confirma deletar?',
                          subHeader: t.name,
                          buttons: [
                            {
                              text: 'Sim',
                              role: 'destructive',
                              data: {
                                action: 'delete',
                              },
                            },
                            {
                              text: 'Não',
                              role: 'cancel',
                              data: {
                                action: 'cancel',
                              },
                            },
                          ],
                          onDidDismiss: async ({ detail }) => {
                            const { data } = detail;
                            const { action } = data;
                            if (action === 'delete') {
                              await deleteTag({ id: t.id });
                              fetchGroups();
                            }
                          },
                        })
                      }
                    >
                      <IonIcon slot="icon-only" icon={trash}></IonIcon>
                    </IonItemOption>
                  </IonItemOptions>
                </IonItemSliding>
              ))}
            </IonList>

            <IonList lines="full">
              <IonListHeader mode="ios">
                <IonLabel>Áreas</IonLabel>
                <IonButton
                  shape="round"
                  fill="outline"
                  onClick={() =>
                    presentAlert({
                      mode: 'ios',
                      header: 'Nova área',
                      buttons: [
                        {
                          text: 'Cancelar',
                          role: 'cancel',
                          handler: (data) => {},
                        },
                        {
                          text: 'Adicionar',
                          handler: async (data) => {
                            if (data) {
                              await createTag({
                                type: TagTypes.AREAS,
                                status: TagStatus.ON,
                                name: data[0].trim(),
                              });
                              fetchAreas();
                            }
                          },
                        },
                      ],
                      inputs: [
                        {
                          placeholder: 'Nome',
                        },
                      ],
                    })
                  }
                >
                  <IonIcon slot="start" icon={addOutline} />
                  Adicionar
                </IonButton>
              </IonListHeader>
              {loading5 && (
                <IonItem>
                  <IonSpinner></IonSpinner>
                </IonItem>
              )}
              {!loading5 && !areas.length && (
                <IonItem>
                  <IonLabel>Nenhuma área cadastrada.</IonLabel>
                </IonItem>
              )}
              {areas.map((t: any) => (
                <IonItemSliding
                  key={t.id}
                  ref={(element) => {
                    refSliding5.current = element;
                  }}
                >
                  <IonItem>
                    <IonLabel>{t.name}</IonLabel>
                  </IonItem>
                  <IonItemOptions side="end">
                    <IonItemOption
                      onClick={() =>
                        presentAlert({
                          mode: 'ios',
                          header: 'Alterar área',
                          subHeader: t.name,
                          buttons: [
                            {
                              text: 'Cancelar',
                              role: 'cancel',
                              handler: (data) => {},
                            },
                            {
                              text: 'Alterar',
                              handler: async (data) => {
                                if (data) {
                                  await updateTag({
                                    id: t.id,
                                    name: data[0].trim(),
                                  });
                                  fetchAreas();
                                }
                              },
                            },
                          ],
                          inputs: [
                            {
                              placeholder: 'Nome',
                            },
                          ],
                        })
                      }
                    >
                      <IonIcon slot="icon-only" icon={create}></IonIcon>
                    </IonItemOption>
                    <IonItemOption
                      mode="ios"
                      color="danger"
                      onClick={() =>
                        present({
                          mode: 'ios',
                          header: 'Confirma deletar?',
                          subHeader: t.name,
                          buttons: [
                            {
                              text: 'Sim',
                              role: 'destructive',
                              data: {
                                action: 'delete',
                              },
                            },
                            {
                              text: 'Não',
                              role: 'cancel',
                              data: {
                                action: 'cancel',
                              },
                            },
                          ],
                          onDidDismiss: async ({ detail }) => {
                            const { data } = detail;
                            const { action } = data;
                            if (action === 'delete') {
                              await deleteTag({ id: t.id });
                              fetchAreas();
                            }
                          },
                        })
                      }
                    >
                      <IonIcon slot="icon-only" icon={trash}></IonIcon>
                    </IonItemOption>
                  </IonItemOptions>
                </IonItemSliding>
              ))}
            </IonList>
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
