import { ReporteCard } from '.';
import { useReportes } from '../hooks';

export const ListReports = () => {
  const { reportes } = useReportes();

  return (
    <>
      {reportes.map((reporte, i) => (
        <ReporteCard key={reporte.id + i} reporte={reporte} />
      ))}
    </>
  );
};
