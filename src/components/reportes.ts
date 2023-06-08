import { database } from '../config/services/firebase.config';
import { Solicitud } from '../mappers/mapp_atencion';
import { Reports } from '../mappers/mapp_reporte';
import { insertarMantenimiento } from '../peticiones/crud-mantenimiento';
import { listarReportes } from '../peticiones/listar-reportes';
import { v4 } from 'uuid';

export const mostrarReportes = async () => {
  function abrirModal() {
    const modalContainer = document.getElementById('modal-container');
    modalContainer!.style.display = 'block';
  }

  function cerrarModal() {
    const modalContainer = document.getElementById('modal-container');
    modalContainer!.style.display = 'none';
  }

  if (window.location.pathname === '/index.html') {
    const data: Reports[] = await listarReportes();
    const insertarModal = document.querySelector<HTMLDivElement>('#insertar-modal');
    data.forEach(({ description, location, picture, user }) => {
      const contenedor2 = document.getElementById('parent2');

      const contenedorAdd = document.createElement('div');

      contenedorAdd.innerHTML = `
        <img class="div1" src="${picture}">
        <p class="div2"><b>Usuario:</b> ${user.name}</p>
        <p class="div3"><b>Descripción:</b><br> ${description}</p>
        <p class="div4"><b>Ubicación:</b><br> ${location}</p>
        <button id="dar-mantenimiento" class="div5">Dar Mantenimiento</button>
      `;

      const mantenimiento = contenedorAdd.querySelector('#dar-mantenimiento');
      mantenimiento!.addEventListener('click', (e) => {
        e.preventDefault();
        insertarModal!.innerHTML = `
          <div id="modal-container" >
            <div id="modal-content">
              <span id="close-modal-btn">&times;</span>
              <h1>Formulario</h1>
              <form id="formulario-reporte">

                <label for="nombre">Usuario:</label>
                <input required disabled type="text" id="nombre" email='${user.email}' name="nombre" value="${user.name}">

                <label for="ubicacion">Ubicacion:</label>
                <input required disabled type="text" id="ubicacion" picture='${picture}'  descripcion='${description}'  name="ubicacion" value="${location}" >

                <label for="fecha">Fecha:</label>
                <input required type="date" id="fecha" name="fecha">

                <label for="hora">Hora:</label>
                <select id="hora" name="hora" required >
                  <option disabled selected value="">Seleccione una hora</option>
                  <option value="7am - 9am">7am - 9am</option>
                  <option value="9am - 11am">9am - 11am</option>
                  <option value="11am - 1pm">11am - 1pm</option>
                  <option value="3pm - 5pm">3pm - 5pm</option>
                </select>

                <label for="encargado">Encargado:</label>
                <select id="encargado" name="encargado" required >
                  <option disabled selected value="">Seleccione un encargado para el trabajo</option>
                  <option value="ordoñez jose - martin">ordoñez jose martin</option>
                  <option value="perez torres - diego">perez torres diego</option>
                  <option value="gamarra chavez - daniel">gamarra chavez daniel</option>
                  <option value="bravo lopez - michael">bravo lopez michael</option>
                  <option value="castillo lino - frank">castillo lino frank</option>
                  <option value="palomino huaranga - fernando">palomino huaranga fernando</option>
                </select>

                <button style="margin-top: 2rem" type="submit">Enviar</button>
              </form>
          </div>
        </div>
        `;

        const btnEnviar = document.getElementById('formulario-reporte');
        btnEnviar!.addEventListener('submit', (e) => {
          e.preventDefault();
          alert('Se ha enviado el formulario');

          const fecha: string = insertarModal!
            .querySelector<HTMLInputElement>('#fecha')!
            .value.split('-')
            .reverse()
            .join('/');
          const hora: string =
            insertarModal!.querySelector<HTMLSelectElement>('#hora')!.value;
          const apellidos: string = insertarModal!
            .querySelector<HTMLSelectElement>('#encargado')!
            .value.split(' - ')[0]!;
          const nombre: string = insertarModal!
            .querySelector<HTMLSelectElement>('#encargado')!
            .value.split(' - ')[1]!;
          const userName: string =
            insertarModal!.querySelector<HTMLInputElement>('#nombre')!.value;
          const userEmail: string = insertarModal!
            .querySelector<HTMLInputElement>('#nombre')!
            .getAttribute('email')!;
          const description: string = insertarModal!
            .querySelector<HTMLInputElement>('#ubicacion')!
            .getAttribute('descripcion')!;
          const location: string =
            insertarModal!.querySelector<HTMLInputElement>('#ubicacion')!.value;
          const picture: string = insertarModal!
            .querySelector<HTMLInputElement>('#ubicacion')!
            .getAttribute('picture')!;

          const enviarSolicitud: Solicitud = {
            id: v4(),
            atencion: {
              fecha,
              hora,
              colaborador: {
                apellidos,
                nombre,
              },
            },
            finalizado: false,
            reporte: {
              description,
              location,
              picture,
              user: {
                name: userName,
                email: userEmail,
              },
            },
          };

          insertarMantenimiento(database, enviarSolicitud.id, enviarSolicitud);
          cerrarModal();
        });

        const confirmacion = confirm(
          '¿Está seguro de empezar a programar el mantenimiento?'
        );
        if (confirmacion) {
          abrirModal();
        }
        const modalContainer = document.getElementById('modal-container');
        const closeModalBtn = document.getElementById('close-modal-btn');

        closeModalBtn!.addEventListener('click', cerrarModal);

        window.addEventListener('click', (event) => {
          if (event.target === modalContainer) {
            cerrarModal();
          }
        });
      });

      contenedorAdd.classList.add('parent');
      contenedor2?.appendChild(contenedorAdd);
    });
  }
};
