import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

export default defineConfig({
  server: {},
  build: {
    sourcemap: true,
    lib: {
      entry: './src/index.ts',
      name: 'vue-one-piece',
      fileName: 'index',
    },
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
