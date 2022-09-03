import { defineConfig } from "@wiew-ui/cli";
import { resolve } from 'path'

export default defineConfig({
  componentDir: resolve(__dirname, 'packages/components'),
  componentEntryDir: resolve(__dirname, 'packages/wiew-ui'),
  docDir: resolve(__dirname, 'docs/components')
})