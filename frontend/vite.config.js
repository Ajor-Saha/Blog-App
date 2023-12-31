import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    hmr: {
      overlay: false,
    },
    proxy: {
      '/api': 'https://blog-app-six-pink.vercel.app',
    },
  },
  plugins: [react()],
})
