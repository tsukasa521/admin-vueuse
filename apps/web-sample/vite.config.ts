import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

export default defineConfig({
  server: {
    port: 1100,
  },
  build: {
    rollupOptions: {
      output: { globals: { vue: 'Vue', 'tdesign-vue-next': 'tdesign-vue-next' } },
      external: ['vue', 'tdesign-vue-next'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [vue()],
})
