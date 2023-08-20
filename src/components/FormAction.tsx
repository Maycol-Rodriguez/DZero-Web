import { ChangeEvent, MouseEvent, useState } from 'react';
import { Error } from '.';
import { useAcciones } from '../hooks';
import { Reporte, initialState } from '../types';

export const FormAction = ({ editar, setModal }: Props) => {
  const [error, setError] = useState<string>('');
  const { accion, setAccion, enviarAccion } = useAcciones();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setAccion({
      ...accion,
      reporte: { ...editar },
      atencion: {
        ...accion.atencion,
        [name]: value,
      },
    });
  };

  const handleAccion = (e: MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!accion || !accion.atencion) {
      return setError('No debe haber campos vacios');
    }
    if (Object.values(accion.atencion).includes('')) {
      return setError('No debe haber campos vacios');
    }
    setError('');
    enviarAccion(accion);
    setAccion(initialState);
    setModal(false);
  };

  return (
    <form className={`max-w-[80rem] w-[40rem] transition-all mx-auto space-y-3`}>
      {error && <Error error={error} />}
      <div>
        <label className='block text-xl' htmlFor='name'>
          Usuario
        </label>
        <input
          className='w-full p-2 rounded-lg text-xl outline outline-2 mt-1'
          type='text'
          name='name'
          id='name'
          onChange={handleChange}
          value={editar?.user?.name}
          disabled
        />
      </div>

      <div>
        <label className='block text-xl' htmlFor='location'>
          Ubicación
        </label>
        <input
          className='w-full p-2 rounded-lg text-xl outline outline-2 mt-1'
          type='text'
          name='location'
          id='location'
          onChange={handleChange}
          value={editar?.location}
          disabled
        />
      </div>

      <div>
        <label className='block text-xl' htmlFor='fecha'>
          Fecha de atención
        </label>
        <input
          className='w-full p-2 rounded-lg text-xl outline outline-2 mt-1'
          type='date'
          name='fecha'
          onChange={handleChange}
          value={accion?.atencion?.fecha || ''}
          id='fecha'
          required
        />
      </div>

      <div>
        <label className='block text-xl' htmlFor='hora'>
          Hora de atención
        </label>
        <select
          className='w-full p-2 rounded-lg text-xl outline outline-2 mt-1'
          name='hora'
          id='hora'
          required
          value={accion?.atencion?.hora}
          onChange={handleChange}
        >
          <option value=''>Seleccione una opción</option>
          <option>8am - 10am</option>
          <option>10am - 12pm</option>
          <option>1pm - 3pm</option>
          <option>3pm - 5pm</option>
          <option>5pm - 7pm</option>
        </select>
      </div>

      <div className='pb-4'>
        <label className='block text-xl' htmlFor='colaborador'>
          Encargado
        </label>
        <select
          className='w-full p-2 rounded-lg text-xl outline outline-2 mt-1'
          name='colaborador'
          id='colaborador'
          value={accion?.atencion?.colaborador}
          onChange={handleChange}
          required
        >
          <option value=''>Seleccione una opción</option>
          <option value='jose perez'>Jose Perez</option>
          <option value='carlos valdez'>carlos Valdez</option>
          <option value='romeo mariategui'>Romeo Mariategui</option>
        </select>
      </div>

      <input
        onClick={handleAccion}
        className='bg-quaternary text-white p-3 font-bold text-xl rounded-lg hover:bg-[rgb(236,156,18)] transition-all cursor-pointer w-full block uppercase'
        type='submit'
        value='Iniciar Mantenimiento'
      />
    </form>
  );
};

interface Props {
  editar: Reporte;
  setModal: (modal: boolean) => void;
}
