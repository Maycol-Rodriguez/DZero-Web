import { useContext } from 'react';
import { AccionesContext } from '../context';

export const useAcciones = () => {
  return useContext(AccionesContext);
};
