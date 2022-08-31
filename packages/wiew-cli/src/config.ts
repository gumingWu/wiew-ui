import { parse } from 'path'
const JoyCon = require('joycon')

export const DEFAULT_CONFIG_FILE = [
  'wiew.config.js',
  'wiew.config.ts'
]

export async function loadWiewConfig(cwd: string) {
  const joycon = new JoyCon()
  const configPath = await joycon.resolve({
    files: DEFAULT_CONFIG_FILE,
    cwd,
    stopDir: parse(cwd).root,
    packageKey: 'wiew'
  })

  console.log(configPath);
}

// 占个坑，暂时做不出类型检查
export function defineConfig(options) {
  return options
}