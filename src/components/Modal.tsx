import { ButtonClose, FormAction } from '.';
import { Reporte } from '../types';

export const Modal = ({ setModal, animarModal, setAnimarModal, editar }: Props) => {
  return (
    <div
      className={`absolute bg-[rgba(0,0,0,0.80)] top-0 left-0 right-0 bottom-0] h-screen w-screen z-10`}
    >
      <div
        className={`${
          animarModal ? 'relative opacity-100' : 'opacity-0'
        } mt-32 w-[42rem] bg-white mx-auto my-auto transition-all pb-8 rounded-lg`}
      >
        <div className='w-full flex justify-end'>
          <ButtonClose setModal={setModal} setAnimarModal={setAnimarModal} />
        </div>
        <FormAction editar={editar} setModal={setModal} />
      </div>
    </div>
  );
};

interface Props {
  setModal: (modal: boolean) => void;
  animarModal: boolean;
  setAnimarModal: (animar: boolean) => void;
  editar: Reporte;
}
