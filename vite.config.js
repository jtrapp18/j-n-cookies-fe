import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react({babel: {parserOpts: {plugins:[],}, plugins: []}})],
  server: {
    proxy: {
      '/api': {
        target: "http://j-n-cookies-production.up.railway.app",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/,'')
      }
    }
  }
})