import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://oterocarlos99.github.io/ProyFinalReact_COO_2025',
  plugins: [react()],
})
