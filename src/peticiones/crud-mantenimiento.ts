import { AxiosResponse } from 'axios';
import { Database, ref, set } from 'firebase/database';
import { axiosInstance } from '../config/axios.config';
import { Solicitud } from '../mappers/mapp_atencion';

export const listarMantenimientos = async (): Promise<Solicitud[]> => {
  //! GET
  try {
    const data: AxiosResponse<Solicitud> = await axiosInstance.get('actions.json');
    return Object.values(data.data);
  } catch (error) {
    console.log('Error al obtener los reportes');
    throw error;
  }
};

export const insertarMantenimiento = async (
  database: Database,
  id: string,
  datos: Solicitud
) => {
  try {
    await set(ref(database, `actions/${id}`), datos);
    console.log('Solicitud registrada exitosamente');
  } catch (error) {
    console.error('Error al registrar la venta:', error);
  }
};

export const actualizarMantenimiento = async (id: string, datos: Solicitud) => {
  try {
    await axiosInstance.put(`actions/${id}.json`, datos);
    console.log('Reporte editada exitosamente');
  } catch (error) {
    console.error('Error al editar la venta:', error);
  }
};
