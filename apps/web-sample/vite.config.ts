import path from "path"

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  base: '/admin-vueuse/',
  server: {
    port: 1100,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    vue(),
    viteStaticCopy({
      silent: true,
      targets: [
        {
          src: 'dist/*',
          dest: path.resolve(__dirname, '../..', 'pages')
        }
      ]
    })
  ],
})
