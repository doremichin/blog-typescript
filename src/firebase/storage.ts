import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import { storage } from './firebase';
import { store } from '../redux/store';
import { checkLoading } from '../redux/blog/slice';

export const uploadToStorage = async (file : any, metadata? : any) => {
  const imageRef = ref(storage, `images/${file.name}`);

  try {
    const snapshot = await uploadBytesResumable(imageRef, file, metadata);
    const url = await getDownloadURL(snapshot.ref);
    store.dispatch(checkLoading());
    return url;
  } catch (error) {
    // console.error('Upload failed', error);
    store.dispatch(checkLoading());
    return '';
  }
};
