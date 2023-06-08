import { AxiosResponse } from 'axios';
import { axiosInstance } from '../config/axios.config';
import { Solicitud } from '../mappers/mapp_atencion';

export const listarMantenimientos = async (): Promise<Solicitud[]> => {
  try {
    const data: AxiosResponse<Solicitud> = await axiosInstance.get('actions.json');
    return Object.values(data.data);
  } catch (error) {
    console.log('Error al obtener los reportes');
    throw error;
  }
};

export const insertarMantenimiento = async (data: Solicitud): Promise<void> => {
  try {
    await axiosInstance.post('actions.json', data);
  } catch (error) {
    console.log('Error al insertar el reporte');
    throw error;
  }
};
