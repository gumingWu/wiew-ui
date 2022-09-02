import { parse } from 'path'
import JoyCon from 'joycon'
import jiti from 'jiti'
import consola from 'consola'
import { bgLightMagenta } from 'kolorist'

export const DEFAULT_CONFIG_FILE = [
  'wiew.config.ts',
  'wiew.config.js',
]

export const REQUIRED_CONFIG = [
  'componentDir',
  'docDir'
]

export async function loadWiewConfig(cwd: string) {
  const joycon = new JoyCon()
  const configPath = await joycon.resolve({
    files: DEFAULT_CONFIG_FILE,
    cwd,
    stopDir: parse(cwd).root
  })

  const _require = jiti(cwd, { interopDefault: true, esmResolve: true })
  const userConfig = _require(configPath)

  if(REQUIRED_CONFIG.some(requiredConfig => !Object.keys(userConfig).includes(requiredConfig))) {
    consola.error(`请检查配置文件是否缺少关键字段:${bgLightMagenta(REQUIRED_CONFIG.join(','))}, 如没有关键字段，后续步骤操作可能需要手动填写路径`)
  }
  return userConfig
}

// 占个坑，暂时做不出类型检查
export function defineConfig(options: Options): Options {
  return options
}

export type Options = {
  name?: string
}