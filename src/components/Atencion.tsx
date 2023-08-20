import { Link, useLocation } from 'react-router-dom';
import { useAcciones } from '../hooks';
import { ActionType } from '../types';

export const Atencion = ({ accion }: Props) => {
  const { pathname } = useLocation();
  const { actualizarAccion } = useAcciones();
  return (
    <>
      {accion.key ? (
        <div className='flex flex-col gap-3 sm:mx-auto md:mx-0 p-3 rounded-xl shadow-md bg-secondary w-80 text-white transition-all'>
          <div className='rounded-xl overflow-hidden '>
            <img
              className='w-full h-56 object-fit-cover'
              src={accion.reporte.picture}
              alt='no-image'
            />
          </div>
          <div className='leading-6 text-base'>
            <h1>
              <b>Usuario: </b>
              {accion.reporte.user.name}
            </h1>
            <p>
              <b>Encargado: </b>
              {accion.atencion.colaborador}
            </p>
            <div className='md:flex md:justify-between'>
              <p>
                <b>Fecha: </b>
                {accion.atencion.fecha.replaceAll('-', '/')}
              </p>
              <p></p>
              <p>
                <b>Hora: </b>
                {accion.atencion.hora}
              </p>
            </div>
            <p>
              <b>Estado: </b>
              {accion.finalizado ? 'Finalizado' : 'En Proceso'}
            </p>
          </div>
          <div className='space-y-3'>
            <Link
              to={`https://www.google.com/maps/place/${accion?.reporte.location?.replace(
                ' ',
                ''
              )}`}
              target='_blank'
              className='p-2 rounded-md text-base font-bold bg-quaternary w-full block hover:bg-[rgb(221,146,17)] transition-all text-center'
            >
              Ubicación
            </Link>
            {pathname === '/proceso' && (
              <button
                onClick={() => {
                  if (confirm('Deseas Actualizar el estado del reporte?')) {
                    actualizarAccion(accion.key, true);
                  }
                }}
                className='transition-all overflow-ellipsis w-full bg-tertiary hover:bg-[#2ba69a] p-2 text-base font-bold rounded-md'
              >
                Actualizar
              </button>
            )}
          </div>
        </div>
      ) : (
        'No hay elementos por el momento'
      )}
    </>
  );
};

interface Props {
  accion: ActionType;
}
