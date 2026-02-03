import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/puzzlebite/',   // IMPORTANT: folder name in S3
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
 
// export default defineConfig({
//   plugins: [react()],
//   base: './', // important for S3 deployment
// })
