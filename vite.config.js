import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy:{
      '/api':'http://ec2-44-220-83-117.compute-1.amazonaws.com/'
    }
  },
  plugins: [react()], 
  optimizeDeps: {
    include: ['react-google-login']
  }
})
