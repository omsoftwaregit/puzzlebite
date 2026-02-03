// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
 
// export default defineConfig({
//   plugins: [react()],
//   base: './', // important for S3 deployment
// })

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   base: '/puzzlebite/',
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/puzzlebite/', // this tells the browser that all assets are under /puzzlebite/
  build: {
    outDir: 'dist/puzzlebite', // 🔹 tell Vite to build directly into the 'puzzlebite' folder
  },
})
