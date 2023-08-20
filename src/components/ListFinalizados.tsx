import { useEffect, useState } from 'react';
import { Atencion } from '.';
import { useAcciones } from '../hooks';
import { ActionType } from '../types';

export const ListFinalizados = () => {
  const [accionFinalizadas, setAccionFinalizadas] = useState<ActionType[]>([]);
  const { acciones } = useAcciones();

  useEffect(() => {
    const filtro = acciones.filter((accion) => accion.finalizado);
    setAccionFinalizadas(filtro);
  }, [acciones]);

  return (
    <>
      {accionFinalizadas.map((accion) => (
        <Atencion key={accion.key} accion={accion} />
      ))}
    </>
  );
};
