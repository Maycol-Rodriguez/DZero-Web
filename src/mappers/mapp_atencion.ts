export interface Solicitud {
  atencion: Atencion;
  finalizado: boolean;
  reporte: Reporte;
}

export interface Atencion {
  colaborador: Colaborador;
  fecha: string;
  hora: string;
}

export interface Colaborador {
  apellidos: string;
  nombre: string;
}

export interface Reporte {
  description: string;
  location: string;
  picture: string;
  user: User;
}

export interface User {
  email: string;
  name: string;
}
