import { AxiosResponse } from 'axios';
import { Database, ref, set } from 'firebase/database';
import { axiosInstance } from '../config/axios.config';
import { Solicitud } from '../mappers/mapp_atencion';

export const listarMantenimientos = async (): Promise<Solicitud[]> => {
  try {
    const data: AxiosResponse<Solicitud> = await axiosInstance.get('actions.json');
    return Object.values(data.data);
  } catch (error) {
    throw `Error al obtener los reportes ${error}`;
  }
};

export const insertarMantenimiento = async (
  database: Database,
  id: string,
  datos: Solicitud
) => {
  try {
    await set(ref(database, `actions/${id}`), datos);
  } catch (error) {
    throw `Error al registrar la venta: ${error}`;
  }
};

export const actualizarMantenimiento = async (id: string, datos: Solicitud) => {
  try {
    await axiosInstance.put(`actions/${id}.json`, datos);
  } catch (error) {
    throw error;
  }
};
