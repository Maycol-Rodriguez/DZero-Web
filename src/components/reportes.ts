import { Reports } from "../mappers/mapp_reporte";
import { listarReportes } from "../peticiones/listar-reportes";

export const mostrarReportes = async () => {
  const data: Reports[] = await listarReportes();

  data.forEach(({ description, location, picture, user }) => {
    const contenedor2 = document.getElementById('parent2') as HTMLDivElement;
    const contenedorAdd = document.createElement('div') as HTMLDivElement;

    const div1 = document.createElement('img') as HTMLImageElement;
    const div2 = document.createElement('p') as HTMLParagraphElement;
    const div3 = document.createElement('p') as HTMLParagraphElement;
    const div4 = document.createElement('p') as HTMLParagraphElement;
    const div5 = document.createElement('button') as HTMLButtonElement;

    div1.classList.add('div1');
    div2.classList.add('div2');
    div3.classList.add('div3');
    div4.classList.add('div4');
    div5.classList.add('div5');

    div1.src = picture;
    div2.innerHTML = '<b>Usuario:</b> ' + user.name;
    div2.style.whiteSpace = 'pre-wrap';

    div3.innerHTML = '<b>Descripcion:</b> \n' + description;
    div3.style.whiteSpace = 'pre-line';

    div4.innerHTML = '<b>Ubicacion:</b> \n' + location;
    div4.style.whiteSpace = 'pre-line';

    div5.textContent = 'Dar Mantenimiento';

    contenedorAdd.appendChild(div1);
    contenedorAdd.appendChild(div2);
    contenedorAdd.appendChild(div3);
    contenedorAdd.appendChild(div4);
    contenedorAdd.appendChild(div5);

    contenedorAdd.classList.add('parent');

    contenedor2.appendChild(contenedorAdd);
  });
};
