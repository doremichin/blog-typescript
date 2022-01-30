import {
  collection, getDocs, doc, setDoc, query, orderBy, getDoc, deleteDoc, updateDoc, Timestamp, where,
} from 'firebase/firestore';

import { IBlogData } from '../interfaces/blog.interfaces';
import { db } from './firebase';
import { IUserData } from '../interfaces/user.interfaces';

export interface IData {
    title : string
    story : string
    createdAt? : any
    updateAt? : any
}

export const getCollectionFB = async (collectionId : string) => {
  const q = query(collection(db, collectionId), orderBy('createdAt', 'desc'));
  const querySnapshot = await getDocs(q);
  const result : any[] = [];
  querySnapshot.forEach((document) => {
    const docItem : IBlogData = {
      id: document.id,
      ...document.data(),
    };
    result.push(docItem);
  });
  console.log(result);
  return result;
};

export const getCollectionByUidFB = async (collectionId : string, uid : string) => {
  const q = query(collection(db, collectionId), orderBy('createdAt', 'desc'), where('uid', '==', uid));
  const querySnapshot = await getDocs(q);
  const result : any[] = [];
  querySnapshot.forEach((document) => {
    const docItem : IBlogData = {
      id: document.id,
      ...document.data(),
    };
    result.push(docItem);
  });
  console.log(result);
  return result;
};

export const setDocumentFB = async (data : IData, user: IUserData | null) => {
  const newCityRef = doc(collection(db, 'blog'));

  await setDoc(newCityRef, {
    ...data,
    createdAt: Timestamp.now(),
    updateAt: Timestamp.now(),
    uid: user?.uid,
    email: user?.email,
  });
};

export const getDocumentFB = async (collectionId : string, documentId : string) => {
  const docRef = doc(db, collectionId, documentId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data());
  } else {
    console.log('No such document!');
  }
  return {
    id: documentId,
    ...docSnap.data(),
  };
};

export const deleteDocumentFB = async (collectionId : string, documentId : string) => {
  await deleteDoc(doc(db, collectionId, documentId));
};

export const updateDocumentFB = async (collectionId : string, documentId : string, data : IData) => {
  const washingtonRef = doc(db, collectionId, documentId);

  await updateDoc(washingtonRef, {
    ...data,
    updateAt: Timestamp.now(),
  });
};
