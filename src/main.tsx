import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './config/environment.config';
import './config/firebase.config';
import { AccionesProvider, ReporteProvider } from './context';
import './index.css';
import { route } from './router/app_route';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReporteProvider>
      <AccionesProvider>
        <RouterProvider router={route} />
      </AccionesProvider>
    </ReporteProvider>
  </React.StrictMode>
);
