import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['index.ts', 'cli.ts'],
  format: ['esm', 'cjs'],
  clean: true,
  external: ['esbuild'],
  outExtension({ format }) {
    return {
      js: `.${format}.js`
    }
  }
})