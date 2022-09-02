import prompts from 'prompts'
import { join } from 'path'
import consola from 'consola'
import { blue, red } from 'kolorist'
import { mkdirs, writeFile, pathExistsSync } from 'fs-extra'
import { lowerFirst, upperFirst, bigCamelCase, compose } from '@wiew-ui/utils'
import { createComponentTemplate, createComponentIndexTemplate, createCssTemplate, createPropsTemplate, createTypesTemplate } from '../templates'

export async function componentsAction(options, userConfig) {
  let componentName = compose(lowerFirst, bigCamelCase)(options.name || '')

  const { componentDir, docDir } = userConfig
  console.log(componentDir, docDir);

  let result
  try {
    result = await prompts([
      {
        type: componentName === '' ? 'text' : null,
        name: 'componentName',
        message: blue('输入组件名(为方便处理，最终会转换成大驼峰写法)'),
        format: val => compose(lowerFirst, bigCamelCase)(val),
        validate(val) {
          return val === '' ? '不能为空': true
        }
      },
      {
        type: 'text',
        name: 'componentPath',
        initial: pre => componentDir ? join(componentDir, componentName || pre) : '',
        message: blue(componentDir ? '确认组件文件创建路径' : '输入组件文件创建路径'),
      },
      { 
        type: 'text',
        name: 'docPath',
        initial: (pre, values) => docDir ? join(docDir, componentName || values.componentName) : '',
        message: blue(docDir ? '确认组件文档创建路径' : '输入组件文档创建路径')
      }
    ])
  } catch(e) {
    consola.error(e)
  } 

  consola.success(result)
  componentName = result.componentName ?? componentName
  const { componentPath, docPath } = result

  if(pathExistsSync(componentPath)) {
    consola.error(red(`${componentName}组件已存在，换个名呗`))
    return
  }

  createComponentFile({
    componentName,
    componentPath,
    docPath
  })
}

async function createComponentFile(options) {
  const {
    componentName,
    componentPath,
    docPath
  } = options
  const srcPath = join(componentPath, 'src')
  const indexPath = join(componentPath, 'index.ts')
  const contentPath = join(srcPath, `${upperFirst(componentName)}.tsx`)
  const cssPath = join(srcPath, `${upperFirst(componentName)}.css`)
  const propsPath = join(srcPath, 'props.ts')
  const typesPath = join(srcPath, 'types.ts')

  try {
    await Promise.all([mkdirs(componentPath), mkdirs(srcPath)])
    await Promise.all([
      writeFile(indexPath, createComponentIndexTemplate()),
      writeFile(contentPath, createComponentTemplate()),
      writeFile(cssPath, createCssTemplate()),
      writeFile(propsPath, createPropsTemplate()),
      writeFile(typesPath, createTypesTemplate())
    ])
  } catch(e) {
    consola.error(e)
  }
}