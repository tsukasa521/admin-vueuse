import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'

export default defineConfig({
  server: {
    port: 11010,
  },
  build: {
    sourcemap: true,
    lib: {
      entry: './src/index.ts',
      name: 'vue-naruto',
      fileName: 'index',
    },
    rollupOptions: {
      output: { globals: { vue: 'Vue' } },
      external: ['vue'],
    },
  },
  plugins: [vue()],
})