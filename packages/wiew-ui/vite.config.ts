import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vuePlugin()],
  build: {
    lib: {
      entry: 'index.ts',
      name: 'wiew-ui',
      fileName: 'wiew-ui',
      formats: ['es', 'cjs', 'umd']
    }
  }
})