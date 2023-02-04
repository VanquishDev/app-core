import { useState } from 'react';
import cn from 'classnames';
import {
  IonAvatar,
  IonChip,
  IonToolbar,
  IonButtons,
  IonButton,
  IonTitle,
  IonIcon,
} from '@ionic/react';

import {
  create,
  ellipsisHorizontal,
  ellipsisVertical,
  helpCircle,
  search,
  personCircle,
  star,
  heartOutline,
  thumbsUpOutline,
  statsChartOutline,
} from 'ionicons/icons';

export default function Video(props: any) {
  const { item } = props;
  const {
    id,
    title,
    description,
    content,
    createdAt,
    views,
    isFavorite,
    hasLike,
    videoProvider,
    vimeoCode,
    points,
    author,
    tags,
    comments,
  } = item;

  const [withLineCamp, setWithLineCamp] = useState(true);
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="shadow select-none">
      <div className="px-4 flex flex-start gap-2 items-center">
        <div>
          <IonAvatar slot="start">
            <img
              src={'https://picsum.photos/80/80?random=' + id}
              alt="avatar"
            />
          </IonAvatar>
        </div>
        <div>
          <div className="font-medium">{author.name}</div>
          <div className="text-sm text-slate-500">{author.description}</div>
        </div>
      </div>

      <h3 className="px-4 mt-2 text-xl font-medium">{title}</h3>

      {description && (
        <div
          onClick={() => setWithLineCamp(!withLineCamp)}
          className={cn('px-4 cursor-pointer mt-2 text-sm text-slate-500', {
            'line-clamp-2': withLineCamp,
          })}
        >
          {description}
        </div>
      )}

      <div className="mt-4">
        <iframe
          width={720}
          height={720 * 0.44}
          src={`https://player.vimeo.com/video/${vimeoCode}`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="px-4 pt-4 pb-2 w-full flex justify-between items-start">
        <div>
          <div className="text-sm font-bold text-slate-600">
            Pontos de interesse
          </div>
          {points.map((p: any, i: number) => (
            <div key={i} className="flex gap-3 text-sm text-slate-500">
              <div>{p.time}</div>
              <div>{p.description}</div>
            </div>
          ))}
        </div>
        <div className="text-sm font-bold text-slate-600">{createdAt}</div>
      </div>

      {tags && (
        <div className="px-2">
          {tags.map((t: any, i: number) => (
            <IonChip key={i} color="tertiary">
              {t.name}
            </IonChip>
          ))}
        </div>
      )}

      <IonToolbar>
        <IonButtons slot="secondary">
          <IonButton>
            <IonIcon slot="icon-only" icon={statsChartOutline}></IonIcon>
          </IonButton>
          <IonButton>
            <IonIcon slot="icon-only" icon={heartOutline}></IonIcon>
          </IonButton>
          <IonButton>
            <IonIcon slot="icon-only" icon={thumbsUpOutline}></IonIcon>
          </IonButton>
        </IonButtons>
        <IonButtons slot="primary">
          <IonButton onClick={() => setShowMore(!showMore)}>
            <IonIcon
              slot="icon-only"
              ios={ellipsisHorizontal}
              md={ellipsisVertical}
            ></IonIcon>
          </IonButton>
        </IonButtons>
        <IonTitle className="text-sm font-bold text-slate-600">
          Comentários
        </IonTitle>
      </IonToolbar>

      {showMore && (
        <div className="px-4 pb-4">
          <div className="bg-slate-100 text-slate-800 px-4 py-2 rounded-xl">
            {content}
          </div>
        </div>
      )}

      <div className="p-4">
        {comments[0] && <div>{comments[0].content}</div>}
      </div>
    </div>
  );
}
