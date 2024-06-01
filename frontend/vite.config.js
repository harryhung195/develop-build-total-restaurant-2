import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/develop-build-total-restaurant-2/',
  plugins: [react()],
})
