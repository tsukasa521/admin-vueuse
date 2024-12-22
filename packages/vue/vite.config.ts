import path from "path"
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

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
      output: { globals: { vue: 'Vue' } },
      external: ['vue'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [dts({ rollupTypes: true })],
})
