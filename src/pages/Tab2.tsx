import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg, IonActionSheet } from '@ionic/react';
import { camera, trash, close } from 'ionicons/icons';
import { usePhotoGallery, Photo } from '../hooks/usePhotoGallery';

const Tab2: React.FC = () => {
  const { deletePhoto, deletePhotoS3, photos, takePhoto, S3Photos } = usePhotoGallery();
  const [photoToDelete, setPhotoToDelete] = useState<Photo>();
  const [photoToDeleteS3, setPhotoToDeleteS3] = useState<String>(); 
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            {photos.map((photo, index) => (
              <IonCol size="6" key={index}>
                <IonImg onClick={() => setPhotoToDelete(photo)} src={photo.base64 ?? photo.webviewPath} />
              </IonCol>
            ))}
            {S3Photos.map((photo, index) => (
              <IonCol size="6" key={index}>
                <IonImg onClick={() => setPhotoToDeleteS3(photo)} src={`${photo}`} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>

        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>

        {/*<IonActionSheet*/}
        {/*  isOpen={!!photoToDelete || !!photoToDeleteS3}*/}
        {/*  buttons={[{*/}
        {/*    text: 'Delete',*/}
        {/*    role: 'destructive',*/}
        {/*    icon: trash,*/}
        {/*    handler: () => {*/}
        {/*      if (photoToDelete) {*/}
        {/*        deletePhoto(photoToDelete);*/}
        {/*        setPhotoToDelete(undefined);*/}
        {/*      } else if (photoToDeleteS3) {*/}
        {/*        deletePhotoS3(photoToDeleteS3);*/}
        {/*        setPhotoToDeleteS3(undefined); */}
        {/*      }*/}
        {/*    }*/}
        {/*  }, {*/}
        {/*    text: 'Cancel',*/}
        {/*    icon: close,*/}
        {/*    role: 'cancel'*/}
        {/*  }]}*/}
        {/*  onDidDismiss={() => {*/}
        {/*      setPhotoToDelete(undefined);*/}
        {/*      setPhotoToDeleteS3(undefined);*/}
        {/*    }*/}
        {/*  }*/}
        {/*/>*/}


      </IonContent>
    </IonPage>
  );
};

export default Tab2;