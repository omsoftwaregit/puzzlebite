import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
 
// Serve from root domain
export default defineConfig({
  plugins: [react()],
  base: '/' // change this from '/puzzlebite/' to '/'
})