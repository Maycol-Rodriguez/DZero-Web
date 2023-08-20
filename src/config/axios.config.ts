import axios from 'axios';
import { VITE_APIKEY, VITE_DATABASEURL } from '.';

export const axio = axios.create({
  baseURL: VITE_DATABASEURL,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    api_key: VITE_APIKEY,
  },
});
