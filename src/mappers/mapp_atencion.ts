import { Reporte } from "./mapp_reporte";

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