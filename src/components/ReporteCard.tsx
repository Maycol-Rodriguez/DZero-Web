import { useState } from 'react';
import { Modal, Card } from '.';
import { Reporte } from '../types';


interface Props {
  reporte: Reporte;
}

export const ReporteCard = ({ reporte }: Props) => {
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [editar, setEditar] = useState({} as Reporte);

  const openModal = () => {
    setModal(true);
    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
    setEditar(reporte);
    return;
  };

  return (
    <div>
      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          editar={editar}
        />
      )}

      <Card openModal={openModal} reporte={reporte} />
    </div>
  );
};
