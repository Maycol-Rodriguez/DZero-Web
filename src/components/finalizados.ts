import { listarMantenimientos } from '../peticiones/crud-mantenimiento';

export const mostrarFinalizados = async () => {
  if (window.location.pathname === '/finalizado.html') {
    const data = await listarMantenimientos();
    const datafiltrada = data.filter((item) => item.finalizado !== false);

    datafiltrada.sort((a, b) => {
      const fechaA = a.atencion.fecha.split('/');
      const fechaB = b.atencion.fecha.split('/');
      const fechaAOrdenada = new Date(`${fechaA[2]}-${fechaA[1]}-${fechaA[0]}`).getTime();
      const fechaBOrdenada = new Date(`${fechaB[2]}-${fechaB[1]}-${fechaB[0]}`).getTime();
      return fechaAOrdenada - fechaBOrdenada;
    });

    datafiltrada.forEach(({ atencion, finalizado, reporte }) => {
      const { colaborador, fecha, hora } = atencion;
      const { location, picture, user } = reporte;

      const contenedor = document.getElementById('finalizado') as HTMLDivElement;

      const div = document.createElement('div');

      div.innerHTML = `
        <div class='card-mantenimiento'>
        <div class='card-info-container'>
          <img class="imagen-mantenimiento" src="${picture}" alt='' />
          <div class='card-mantenimiento-info'>
            <p><b>Usuario</b>: ${user.name}</p>
            <p><b>Ubicación</b>: <br> <span>${location}</span></p>
            <p><b>Encargado</b>: ${colaborador.apellidos}, ${colaborador.nombre}</p>
            <div>
              <p><b>Fecha:</b> <br> ${fecha}</p>
              <p><b>Hora:</b> <br> ${hora}</p>
            </div>
            <p><b>Estado:</b> ${finalizado ? 'Finalizado' : 'Pendiente'}</p>
           </div>
        </div>
      </div>
      `;

      contenedor?.append(div);
    });
  }
};
