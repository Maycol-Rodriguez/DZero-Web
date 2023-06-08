import axios from 'axios';
import { API_KEY, DATABASE_URL } from '../../variables';

export const axiosInstance = axios.create({
  baseURL: DATABASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    api_key: API_KEY,
  },
});
