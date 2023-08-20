import { useContext } from 'react';
import { ReporteContext } from '../context';

export const useReportes = () => {
  return useContext(ReporteContext);
};
