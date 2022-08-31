import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['index.ts'],
  format: ['esm', 'cjs'],
  target: 'es5',
  dts: true,
  clean: true,
  outExtension({ format }) {
    return {
      js: `.${format}.js`
    }
  }
})