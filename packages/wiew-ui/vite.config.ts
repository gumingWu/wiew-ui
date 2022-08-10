import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'
import vueJsxPlugin from '@vitejs/plugin-vue-jsx'
import vueDtsPlugin from 'vite-plugin-dts'

export default defineConfig({
  plugins: [vuePlugin(), vueJsxPlugin(), vueDtsPlugin({ include: '../components' })],
  build: {
    lib: {
      entry: 'index.ts',
      name: 'wiew-ui',
      fileName: 'wiew-ui',
      formats: ['es', 'cjs', 'umd']
    }
  }
})