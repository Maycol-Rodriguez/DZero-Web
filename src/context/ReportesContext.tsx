import { createContext, useEffect, useState } from 'react';
import { axio } from '../config';
import { Reporte } from '../types';

interface Props {
  reportes: Reporte[];
}

export const ReporteContext = createContext<Props>({ reportes: [] });

export const ReporteProvider = ({ children }: PropsChildren) => {
  const [reportes, setReportes] = useState<Reporte[]>([] as Reporte[]);

  useEffect(() => {
    const obtenerReportes = async () => {
      const { data } = await axio<Reporte[]>('/reports.json');
      setReportes(Object.values(data));
    };
    obtenerReportes();
  }, []);

  return (
    <ReporteContext.Provider
      value={{
        reportes,
      }}
    >
      {children}
    </ReporteContext.Provider>
  );
};

interface PropsChildren {
  children: JSX.Element | JSX.Element[];
}
