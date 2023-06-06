import { AxiosResponse } from 'axios';
import { axiosInstance } from '../config/axios.config';
import { Reports } from '../mappers/mapp_reporte';

export const listarReportes = async (): Promise<Reports[]> => {
  try {
    const data: AxiosResponse<Reports> = await axiosInstance.get('reports.json');
    return Object.values(data.data);
  } catch (error) {
    console.log('Error al obtener los reportes');
    throw error;
  }
};
