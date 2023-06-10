// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        finalizado: resolve(__dirname, 'finalizado.html'),
        mantenimiento: resolve(__dirname, 'mantenimiento.html'),
      },
    },
  },
});
