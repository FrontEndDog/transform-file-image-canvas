import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      'transform-file-image-canvas': resolve(__dirname, 'src/packages/index.ts'),
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [vue()],
})
