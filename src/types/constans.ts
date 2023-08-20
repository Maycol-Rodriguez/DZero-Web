import { Accion } from '.';

export const initialState: Accion = {
  atencion: {
    colaborador: '',
    fecha: '',
    hora: '',
  },
  finalizado: false,
  reporte: {
    id: '',
    picture: '',
    location: '',
    description: '',
    user: {
      id: '',
      name: '',
      email: '',
    },
  },
};
