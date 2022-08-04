import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
const { resolve } = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@Assets': resolve(__dirname, 'src/assets'),
      '@Components': resolve(__dirname, 'src/views/components'),
      '@Pages': resolve(__dirname, 'src/views/pages'),
    },
  },
  server: {
    host: '192.168.1.42',
    port: '7777',
  },
})
