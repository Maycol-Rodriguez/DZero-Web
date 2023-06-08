import { listarMantenimientos } from '../peticiones/crud-mantenimiento';
import { Solicitud } from '../mappers/mapp_atencion';

export const mostrarMantenimientos = async () => {
  const data: Solicitud[] = await listarMantenimientos();

  if (window.location.pathname === '/mantenimiento.html') {
    data.forEach(({ atencion, finalizado, reporte }) => {
      const { colaborador, fecha, hora } = atencion;
      const { location, picture, user } = reporte;

      const contenedor = document.getElementById('mantenimiento') as HTMLDivElement;

      const div = document.createElement('div');

      div.innerHTML = `
        <div class='card-mantenimiento'>
        <div>
          <img class="imagen-mantenimiento" src="${picture}" alt='' />
          <div class='card-mantenimiento-info'>
            <p><b>Usuario</b>: ${user.name}</p>
            <p><b>Ubicación</b>: ${location}</p>
            <p><b>Encargado</b>: ${colaborador.apellidos} ${colaborador.nombre}</p>
            <div>
              <p><b>Fecha:</b> ${fecha}</p>
              <p><b>Hora:</b> ${hora}</p>
            </div>
            <p><b>Estado:</b> ${finalizado ? 'Finalizado' : 'Pendiente'}</p>
            <button type='submit'>Finalizar Mantenimiento?</button>
          </div>
        </div>
      </div>;
      `;

      contenedor.append(div);
    });
  }
};
