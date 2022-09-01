import { parse } from 'path'
import JoyCon from 'joycon'
import jiti from 'jiti'

export const DEFAULT_CONFIG_FILE = [
  'wiew.config.ts',
  'wiew.config.js',
]

export async function loadWiewConfig(cwd: string) {
  const joycon = new JoyCon()
  const configPath = await joycon.resolve({
    files: DEFAULT_CONFIG_FILE,
    cwd,
    stopDir: parse(cwd).root
  })

  console.log(configPath);
  const _require = jiti(cwd, { interopDefault: true, esmResolve: true })
  const file = _require(configPath)
  console.log(file);
}

// 占个坑，暂时做不出类型检查
export function defineConfig(options: Options): Options {
  return options
}

export type Options = {
  name?: string
}