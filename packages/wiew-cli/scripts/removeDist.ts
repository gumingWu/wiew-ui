// 这个脚本是因为tsup在生成dts的时候如果已经存在index.d.ts时，就会报错，clean：true又不生效

import { removeSync } from 'fs-extra'
import { resolve } from 'path'

const distPath = resolve(__dirname, '../dist')

removeSync(distPath)
