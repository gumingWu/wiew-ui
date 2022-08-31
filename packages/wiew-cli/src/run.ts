import { loadWiewConfig } from './config'

export function run() {
  loadWiewConfig(process.cwd())
}