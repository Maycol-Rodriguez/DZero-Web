import { initializeApp } from 'firebase/app';
import {
  VITE_APIKEY,
  VITE_APPID,
  VITE_AUTHDOMAIN,
  VITE_DATABASEURL,
  VITE_MEASUREMENTID,
  VITE_MESSAGINGSENDERID,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
} from '.';

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  databaseURL: VITE_DATABASEURL,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
  measurementId: VITE_MEASUREMENTID,
};

export const app = initializeApp(firebaseConfig);
