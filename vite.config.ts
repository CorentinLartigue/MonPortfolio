import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/MonPortfolio/', // Base path pour GitHub Pages
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        '404': '404.html', // Ajout du fichier 404
      },
    },
  },
});
