import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: ['index.ts'],
    format: ['esm', 'cjs'],
    target: 'es5',
    dts: true,
    clean: true,
    splitting: true,
    outExtension({ format }) {
      return {
        js: `.${format}.js`
      }
    }
  },
  {
    entry: ['cli.ts'],
    clean: true,
    splitting: true,
  }
])