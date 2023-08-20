import { createContext, useEffect, useState } from 'react';
import { axio } from '../config';
import { Accion, ActionType, initialState } from '../types';

export const AccionesContext = createContext<PropContext>({} as PropContext);

export const AccionesProvider = ({ children }: Props) => {
  const [acciones, setAcciones] = useState<ActionType[]>([]);
  const [accion, setAccion] = useState<Accion>(initialState);

  useEffect(() => {
    const obtenerAcciones = async () => {
      try {
        const { data } = await axio<Accion>('/actions.json');
        const transformedActions: ActionType[] = Object.entries(data).map(
          ([key, actionData]: [string, Accion]) => ({
            ...actionData,
            key,
          })
        );
        setAcciones(transformedActions);
      } catch (error) {
        throw new Error('No se pudo obtener las acciones del backend');
      }
    };
    obtenerAcciones();
  }, [acciones]);

  const enviarAccion = async (accion: Accion) => {
    try {
      const { data } = await axio.post('/actions.json', accion);
      setAccion(data);
    } catch (error) {
      throw new Error('No se pudo enviar la accion al backend');
    }
  };

  const actualizarAccion = async (id: string, finalizado: boolean) => {
    try {
      await axio.patch(`/actions/${id}.json`, { finalizado });
      const nAccion = acciones.filter((accion) => accion.key !== id);
      setAcciones(nAccion);
    } catch (error) {
      throw new Error('Hubo un error al momento de actualizar los datos en el backend');
    }
  };

  return (
    <AccionesContext.Provider
      value={{
        accion,
        actualizarAccion,
        enviarAccion,
        acciones,
        setAccion,
      }}
    >
      {children}
    </AccionesContext.Provider>
  );
};

interface PropContext {
  accion: Accion;
  actualizarAccion: (id: string, finalizado: boolean) => void;
  enviarAccion: (accion: Accion) => void;
  acciones: ActionType[];
  setAccion: (accion: Accion) => void;
}

interface Props {
  children: JSX.Element | JSX.Element[];
}
