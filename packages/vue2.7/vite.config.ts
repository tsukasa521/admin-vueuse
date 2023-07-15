import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'

export default defineConfig({
  server: {
    port: 10002,
  },
  build: {
    sourcemap: true,
    lib: {
      entry: './src/index.ts',
      name: 'blink-vue2',
      fileName: 'index',
    },
    rollupOptions: {
      output: { globals: { vue: 'Vue' } },
      external: ['vue'],
    },
  },
  plugins: [vue()],
})