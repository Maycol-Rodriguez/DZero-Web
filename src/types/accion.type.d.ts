export interface Accion {
  atencion: Atencion;
  finalizado: boolean;
  reporte: Reporte;
}

export interface ActionType {
  key: string;
  atencion: Atencion;
  finalizado: boolean;
  reporte: Reporte;
}
