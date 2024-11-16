import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base:'/MonPortfolio/',
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
    },
  },
})
