import { createBrowserRouter } from 'react-router-dom';
import { Finalizados, NotFound, Proceso, Reportes } from '../pages';
import { Layout } from '../components';

export const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Reportes />,
      },
      {
        path: '/proceso',
        element: <Proceso />,
      },
      {
        path: '/finalizados',
        element: <Finalizados />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
