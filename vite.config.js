import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5500,     // <— tu puerto
    strictPort: true, // si está ocupado, falla en vez de saltar a otro
  }
})
