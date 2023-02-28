import React, { useEffect, useState } from 'react';

import { getMode } from '@ionic/core';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonCheckbox,
  IonListHeader,
  IonSpinner,
} from '@ionic/react';

import { useAuthenticator } from '@aws-amplify/ui-react';
import { useTag } from '@/hooks/useTag';
import { useUserTag } from '@/hooks/useUserTag';
import { TagTypes } from '@/API';

interface OwnProps {
  onDismissModal: () => void;
}

interface StateProps {}

interface DispatchProps {}

type FilterProps = OwnProps & StateProps & DispatchProps;

export const updateFilteredTracks = (filteredTracks: string[]) =>
  ({
    type: 'update-filtered-tracks',
    filteredTracks,
  } as const);

const Filter: React.FC<FilterProps> = ({ onDismissModal }) => {
  const ios = getMode() === 'ios';

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

  const [selectedTags, setSelectedTags] = useState([] as any);

  const { listTagsByTypeName } = useTag();
  const { listTagsByUserTag, createUserTag, deleteUserTag } = useUserTag();
  const { user } = useAuthenticator((context) => [context.user]);

  const fetchModalities = async () => {
    setLoading1(true);
    const { items } = await listTagsByTypeName({
      type: TagTypes.MODALITIES,
      limit: 1000,
    });
    setModalities(items);
    setLoading1(false);
  };

  const fetchSpecialties = async () => {
    setLoading2(true);
    const { items } = await listTagsByTypeName({
      type: TagTypes.SPECIALTIES,
      limit: 1000,
    });
    setSpecialties(items);
    setLoading2(false);
  };

  const fetchRegions = async () => {
    setLoading3(true);
    const { items } = await listTagsByTypeName({
      type: TagTypes.REGIONS,
      limit: 1000,
    });
    setRegions(items);
    setLoading3(false);
  };

  const fetchGroups = async () => {
    setLoading4(true);
    const { items } = await listTagsByTypeName({
      type: TagTypes.GROUPS,
      limit: 1000,
    });
    setGroups(items);
    setLoading4(false);
  };

  const fetchAreas = async () => {
    setLoading5(true);
    const { items } = await listTagsByTypeName({
      type: TagTypes.AREAS,
      limit: 1000,
    });
    setAreas(items);
    setLoading5(false);
  };

  useEffect(() => {
    fetchModalities();
    fetchSpecialties();
    fetchRegions();
    fetchGroups();
    fetchAreas();
  }, []);

  useEffect(() => {
    const fetchUserTags = async () => {
      const l = await listTagsByUserTag({
        userID: user.username as string,
        limit: 1000,
      });
      const t = [] as any
      l.items.map((tag: any) => {
        t.push(tag.tagID)
      });
      setSelectedTags(t);
    };
    if (user && user.username) {
      fetchUserTags();
    }
  }, [user]);

  const toggleTag = async (tag: any) => {
    if (selectedTags.indexOf(tag.id) > -1) {
      setSelectedTags(selectedTags.filter((x: string) => x !== tag.id));
      const l = await listTagsByUserTag({
        userID: user.username as string,
        tagID: { eq: tag.id },
      });
      l.items.map(async (i: any) => {
        await deleteUserTag({
          id: i.id,
        });
      });
    } else {
      setSelectedTags([...selectedTags, tag.id]);
      const l = await listTagsByUserTag({
        userID: user.username as string,
        tagID: { eq: tag.id },
      });
      if (l.items.length === 0) {
        await createUserTag({
          tagID: tag.id,
          userID: user.username as string,
        });
      }
    }
  };

  return (
    <>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={onDismissModal}>Cancelar</IonButton>
          </IonButtons>

          <IonTitle>Tags do seu interesse</IonTitle>

          <IonButtons slot="end">
            <IonButton
              onClick={onDismissModal}
            >
              OK
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonList lines="full">
          <IonListHeader mode="ios">
            <IonLabel>Modalidades</IonLabel>
          </IonListHeader>
          {loading1 && (
            <IonItem>
              <IonSpinner></IonSpinner>
            </IonItem>
          )}
          {modalities.map((t: any) => (
            <IonItem key={t.id}>
              <IonLabel>{t.name}</IonLabel>
              <IonCheckbox
                onClick={() => toggleTag(t)}
                checked={selectedTags.indexOf(t.id) !== -1}
                color="primary"
                value={t.id}
              ></IonCheckbox>
            </IonItem>
          ))}
        </IonList>
        <IonList lines="full">
          <IonListHeader mode="ios">
            <IonLabel>Especialidades</IonLabel>
          </IonListHeader>
          {loading2 && (
            <IonItem>
              <IonSpinner></IonSpinner>
            </IonItem>
          )}
          {specialties.map((t: any) => (
            <IonItem key={t.id}>
              <IonLabel>{t.name}</IonLabel>
              <IonCheckbox
                onClick={() => toggleTag(t)}
                checked={selectedTags.indexOf(t.id) !== -1}
                color="primary"
                value={t.id}
              ></IonCheckbox>
            </IonItem>
          ))}
        </IonList>
        <IonList lines="full">
          <IonListHeader mode="ios">
            <IonLabel>Regiões</IonLabel>
          </IonListHeader>
          {loading3 && (
            <IonItem>
              <IonSpinner></IonSpinner>
            </IonItem>
          )}
          {regions.map((t: any) => (
            <IonItem key={t.id}>
              <IonLabel>{t.name}</IonLabel>
              <IonCheckbox
                onClick={() => toggleTag(t)}
                checked={selectedTags.indexOf(t.id) !== -1}
                color="primary"
                value={t.id}
              ></IonCheckbox>
            </IonItem>
          ))}
        </IonList>
        <IonList lines="full">
          <IonListHeader mode="ios">
            <IonLabel>Grupos</IonLabel>
          </IonListHeader>
          {loading4 && (
            <IonItem>
              <IonSpinner></IonSpinner>
            </IonItem>
          )}
          {groups.map((t: any) => (
            <IonItem key={t.id}>
              <IonLabel>{t.name}</IonLabel>
              <IonCheckbox
                onClick={() => toggleTag(t)}
                checked={selectedTags.indexOf(t.id) !== -1}
                color="primary"
                value={t.id}
              ></IonCheckbox>
            </IonItem>
          ))}
        </IonList>
        <IonList lines="full">
          <IonListHeader mode="ios">
            <IonLabel>Áreas</IonLabel>
          </IonListHeader>
          {loading5 && (
            <IonItem>
              <IonSpinner></IonSpinner>
            </IonItem>
          )}
          {areas.map((t: any) => (
            <IonItem key={t.id}>
              <IonLabel>{t.name}</IonLabel>
              <IonCheckbox
                onClick={() => toggleTag(t)}
                checked={selectedTags.indexOf(t.id) !== -1}
                color="primary"
                value={t.id}
              ></IonCheckbox>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </>
  );
};

export default Filter;
