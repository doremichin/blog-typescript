import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyCpxLt1vDDeAm1DHGA9a-myAoN9tASHeu4',
  authDomain: 'myblog-286be.firebaseapp.com',
  projectId: 'myblog-286be',
  storageBucket: 'myblog-286be.appspot.com',
  messagingSenderId: '645935886437',
  appId: '1:645935886437:web:03f3340958189b86ca168c',
});

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);
