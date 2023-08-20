import { Link } from 'react-router-dom';
import { Reporte } from '../types';

export const Card = ({ openModal, reporte }: Props) => {
  const handleImage = (imagen: string) => {
    window.open(imagen, '_blank');
  };

  return (
    <>
      {reporte && reporte.id && (
        <div className='sm:mx-auto md:mx-0 gap-3 p-3 h-80 rounded-xl shadow-md bg-secondary w-[420px] text-white grid grid-cols-2 transition-all'>
          <div className='h-full overflow-hidden gap-2 flex flex-col'>
            <img
              onClick={() => handleImage(reporte.picture)}
              src={reporte?.picture}
              alt='reporte de RCDs'
              className='w-full object-cover h-full transition-all cursor-pointer rounded-xl hover:opacity-60'
            />
            <div className='flex justify-center items-center text-center text-xl truncate'>
              <p>
                <b>Usuario: </b>
                {reporte?.user?.name.split(' ')[0]}
              </p>
            </div>
          </div>

          <div className='relative pb-4 text-white space-y-2'>
            <p className='p-1 rounded-md text-base overflow-hidden'>
              <span className='font-bold overflow-hidden text-lg'>Descripcion: </span>{' '}
              {reporte?.description}
            </p>
            <div className='absolute bottom-0 space-y-2'>
              <Link
                to={`https://www.google.com/maps/place/${reporte?.location?.replace(
                  ' ',
                  ''
                )}`}
                target='_blank'
                className='p-2 rounded-md text-base font-bold bg-quaternary hover:bg-[rgb(221,146,17)] w-full block transition-all text-center'
              >
                Ubicación
              </Link>

              <button
                onClick={() => openModal(reporte?.id)}
                className='transition-color font-bold overflow-ellipsis w-full block  bg-tertiary text-base hover:bg-[#2ba69a] p-2 rounded-md'
              >
                Empezar Mantenimiento
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

interface Props {
  openModal: (id?: string) => void;
  reporte: Reporte;
}
