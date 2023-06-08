import { mostrarFinalizados } from './components/finalizados';
import { mostrarMantenimientos } from './components/mantenimientos';
import { mostrarReportes } from './components/reportes';

document.addEventListener('DOMContentLoaded', () => {
  mostrarReportes();
  mostrarMantenimientos();
  mostrarFinalizados();
});
