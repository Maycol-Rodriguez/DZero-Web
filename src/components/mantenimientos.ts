import {
  actualizarMantenimiento,
  listarMantenimientos,
} from '../peticiones/crud-mantenimiento';
import { Solicitud } from '../mappers/mapp_atencion';

export const mostrarMantenimientos = async () => {
  if (window.location.pathname === '/mantenimiento.html') {
    const data: Solicitud[] = await listarMantenimientos();
    const datafiltrada = data.filter((item) => item.finalizado !== true);

    datafiltrada.forEach(({ atencion, finalizado, reporte, id }) => {
      const dataFinal: Solicitud = {
        atencion,
        finalizado,
        reporte,
        id,
      };
      const { colaborador, fecha, hora } = atencion;
      const { location, picture, user } = reporte;

      const contenedor = document.getElementById('mantenimiento') as HTMLDivElement;

      const cardMantenimiento = document.createElement('div');

      cardMantenimiento.innerHTML = `
        <div class='card-mantenimiento'>
        <div class='card-info-container' id-element='${id}'>
          <img class="imagen-mantenimiento" src="${picture}" alt='' />
          <div class='card-mantenimiento-info' >
            <p><b>Usuario</b>: ${user.name}</p>
            <p><b>Ubicación</b>: <br> <span>${location}</span></p>
            <p><b>Encargado</b>: ${colaborador.apellidos}, ${colaborador.nombre}</p>
            <div>
              <p><b>Fecha:</b> <br> ${fecha}</p>
              <p><b>Hora:</b> <br> ${hora}</p>
            </div>
            <p><b>Estado:</b> ${finalizado ? 'Finalizado' : 'Pendiente'}</p>
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

        const confirmacion = confirm(
          '¿Está seguro de empezar a programar el mantenimiento?'
        );

        if (confirmacion) {
          actualizarMantenimiento(idSeleccionado!, actualizarSolicitud);
        }
      });

      contenedor?.append(cardMantenimiento);
    });
  }
};
