import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'
import vueJsxPlugin from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [vuePlugin(), vueJsxPlugin()],
  build: {
    lib: {
      entry: 'index.ts',
      name: 'wiew-ui',
      fileName: 'wiew-ui',
      formats: ['es', 'cjs', 'umd']
    }
  }
})