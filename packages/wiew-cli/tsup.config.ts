import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: ['index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    outExtension({ format }) {
      return {
        js: `.${format}.js`
      }
    }
  },
  {
    entry: ['cli.ts'],
    dts: false,
  }
])