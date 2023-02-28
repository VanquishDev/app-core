import React, { useEffect, useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useBreakPoints } from '@/hooks/useBreakPoints';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { usePost } from '@/hooks/usePost';
import { useTag } from '@/hooks/useTag';
import { TagTypes } from '@/API';
import { useAuthenticator } from '@aws-amplify/ui-react';

import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonTitle,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonTextarea,
  IonListHeader,
  IonSpinner,
  IonCheckbox,
} from '@ionic/react';

interface OwnProps {
  onDismissModal: () => void;
}

interface StateProps {}

type UploadProps = OwnProps & StateProps & DispatchProps;

interface DispatchProps {}

type Inputs = {
  title: string;
  description: string;
};

const Upload: React.FC<UploadProps> = ({ onDismissModal }) => {
  interface OwnProps {
    onDismissModal: () => void;
  }

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

  const { isSm } = useBreakPoints();
  const [step, setStep] = useState(0);

  const onDrop = useCallback(async (acceptedFiles: any[]) => {
    const file = acceptedFiles[0];
    console.log(file);
    setStep(1);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'video/*': [] },
    onDrop,
  });

  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    setError,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    setStep(2);
  };

  const toggleTag = (tag: any) => {
    if (selectedTags.indexOf(tag.id) > -1) {
      setSelectedTags(selectedTags.filter((x: string) => x !== tag.id));
    } else {
      setSelectedTags([...selectedTags, tag.id]);
    }
  };

  return (
    <>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={onDismissModal}>Cancelar</IonButton>
          </IonButtons>

          <IonTitle>Upload</IonTitle>

          {step === 2 && (
            <IonButtons slot="end">
              <IonButton onClick={onDismissModal} strong>
                OK
              </IonButton>
            </IonButtons>
          )}
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {step === 0 && (
          <div className="w-full p-4">
            <div
              {...getRootProps()}
              className="bg-slate-100 cursor-pointer mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-lg"
            >
              <input {...getInputProps()} />
              {!isSm && (
                <p className="text-black text-lg">
                  Arrastar e soltar o vídeo aqui ou <a>clique</a> para
                  selecionar...
                </p>
              )}
              {isSm && (
                <p className="text-black text-lg">Selecionar vídeo...</p>
              )}
            </div>
          </div>
        )}

        {step === 1 && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <IonList>
              <IonItem lines="none">
                <IonLabel position="stacked">Título</IonLabel>
                <IonTextarea
                  rows={1}
                  className="bg-slate-100 rounded-lg outline-none px-4 py-2"
                  {...register('title')}
                  autoGrow={true}
                  placeholder=""
                ></IonTextarea>
              </IonItem>
              <IonItem lines="none">
                <IonLabel position="stacked">Descrição</IonLabel>
                <IonTextarea
                  rows={6}
                  className="bg-slate-100 rounded-lg outline-none px-4 py-2"
                  {...register('description')}
                  autoGrow={true}
                  placeholder=""
                ></IonTextarea>
              </IonItem>
              <div className="p-4">
                <IonButton shape="round" type="submit">
                  Continuar
                </IonButton>
              </div>
            </IonList>
          </form>
        )}

        {step === 2 && (
          <>
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
          </>
        )}
      </IonContent>
    </>
  );
};

export default Upload;
