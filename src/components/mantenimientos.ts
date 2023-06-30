import {
  actualizarMantenimiento,
  listarMantenimientos,
} from '../peticiones/crud-mantenimiento';
import { Solicitud } from '../mappers/mapp_atencion';

export const mostrarMantenimientos = async () => {
  if (window.location.pathname === '/mantenimiento.html') {
    const data: Solicitud[] = await listarMantenimientos();

    const datafiltrada = data.filter((item) => item.finalizado !== true);

    datafiltrada.sort((a, b) => {
      const fechaA = a.atencion.fecha.split('/');
      const fechaB = b.atencion.fecha.split('/');
      const fechaAOrdenada = new Date(`${fechaA[2]}-${fechaA[1]}-${fechaA[0]}`).getTime();
      const fechaBOrdenada = new Date(`${fechaB[2]}-${fechaB[1]}-${fechaB[0]}`).getTime();
      return fechaAOrdenada - fechaBOrdenada;
    });

    datafiltrada.forEach(({ atencion, finalizado, reporte }) => {
      const dataFinal: Solicitud = {
        atencion,
        finalizado,
        reporte,
      };
      const { colaborador, fecha, hora } = atencion;
      const { location, picture, user } = reporte;

      const contenedor = document.getElementById('mantenimiento') as HTMLDivElement;

      const cardMantenimiento = document.createElement('div');

      cardMantenimiento.innerHTML = `
        <div class='card-mantenimiento'>
        <div class='card-info-container' id-element='${reporte.id}'>
          <img class="imagen-mantenimiento" src="${picture}" alt='' />
          <div class='card-mantenimiento-info'  >
            <p><b>Usuario</b>: ${user.name}</p>
            <p><b>Ubicación</b>: <br> <span>${location}</span></p>
            <p><b>Encargado</b>: ${colaborador.apellidos}, ${colaborador.nombre}</p>
            <div>
              <p><b>Fecha:</b> <br> ${fecha}</p>
              <p><b>Hora:</b> <br> ${hora}</p>
            </div>
            <p><b>Estado:</b> ${finalizado ? 'Finalizado' : 'En Proceso'}</p>
            <button id="btnFinalizar" type='submit'>Finalizar Mantenimiento?</button>
          </div>
        </div>
      </div>;
      `;

      const btnFinalizar = cardMantenimiento.querySelector('#btnFinalizar');
      btnFinalizar?.addEventListener('click', () => {
        const idSeleccionado = cardMantenimiento
          .querySelector('.card-info-container')!
          .getAttribute('id-element');

        const actualizarSolicitud = {
          ...dataFinal,
          finalizado: true,
        };

        const confirmacion = confirm('¿El proceso fue concluido?');

        if (confirmacion) {
          actualizarMantenimiento(idSeleccionado!, actualizarSolicitud);
        }
      });

      contenedor?.append(cardMantenimiento);
    });
  }
};
