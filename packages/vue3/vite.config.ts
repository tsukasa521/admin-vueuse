import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  server: {
    port: 10003,
  },
  build: {
    sourcemap: true,
    lib: {
      entry: './src/index.ts',
      name: 'blink-vue3',
      fileName: 'index',
    },
    rollupOptions: {
      output: { globals: { vue: 'Vue' } },
      external: ['vue'],
    },
  },
  plugins: [vue()],
})
