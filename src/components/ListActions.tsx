import { useEffect, useState } from 'react';
import { Atencion } from '.';
import { useAcciones } from '../hooks';
import { ActionType } from '../types';

export const ListActions = () => {
  const [accionIncompleta, setAccionIncompleta] = useState<ActionType[]>([]);
  const { acciones } = useAcciones();

  useEffect(() => {
    const incompletas = acciones.filter((accion) => !accion.finalizado);
    setAccionIncompleta(incompletas);
  }, [acciones]);

  return (
    <>
      {accionIncompleta.map((accion) => (
        <Atencion key={accion.key} accion={accion} />
      ))}
    </>
  );
};
