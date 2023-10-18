import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  server: {
    port: 1101,
  },
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
  plugins: [vue()],
})
