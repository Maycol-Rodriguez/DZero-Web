import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-md'>
        <h1 className='text-4xl font-semibold mb-4'>404 - Página no encontrada</h1>
        <p className='text-gray-600'>
          Lo sentimos, la página que estás buscando no se encuentra disponible.
        </p>
        <button
          onClick={() => navigate('/')}
          className='mt-6 px-4 py-2 bg-tertiary transition-all text-white rounded-lg hover:bg-[#09d6c2]'
        >
          Volver a la página de inicio
        </button>
      </div>
    </div>
  );
};
