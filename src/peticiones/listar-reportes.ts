import { AxiosResponse } from 'axios';
import { axiosInstance } from '../config/axios.config';
import { Reporte } from '../mappers/mapp_reporte';

export const listarReportes = async (): Promise<Reporte[]> => {
  try {
    const data: AxiosResponse<Reporte> = await axiosInstance.get('reports.json');
    return Object.values(data.data);
  } catch (error) {
    console.log('Error al obtener los reportes');
    throw error;
  }
};
