import prompts from 'prompts'
import { join } from 'path'
import consola from 'consola'
import { blue, red } from 'kolorist'
import { mkdirs, writeFile, pathExistsSync } from 'fs-extra'
import { lowerFirst, upperFirst, bigCamelCase, compose } from '@wiew-ui/utils'
import { createComponentTemplate, createComponentIndexTemplate, createCssTemplate, createDocTemplate, createPropsTemplate, createTypesTemplate } from '../templates'

const COMPONENT_CATEGORY = [
  { id: 'Normal', label: '基础组件' },
  { id: 'Show', label: '数据展示组件' },
  { id: 'Experiment', label: '实验性组件' },
  { id: 'Other', label: '自定义' }
]

export async function componentsAction(options, userConfig) {
  let componentName = compose(lowerFirst, bigCamelCase)(options.name || '')

  const { componentDir, docDir } = userConfig

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
        name: 'componentChinese',
        message: blue('输入组件中文名，不需要可输入n/N')
      },
      {
        type: 'select',
        name: 'category',
        message: blue('选择组件分类，可自定义'),
        choices: COMPONENT_CATEGORY.map(item => ({
          title: `${item.id} ${item.label}`,
          value: item.id
        }))
      },
      {
        type: pre => pre === 'Other' ? 'text' : null,
        name: 'customizeCategory',
        message: blue('输入自定义分类')
      },
      {
        type: 'text',
        name: 'componentPath',
        initial: (pre, values) => componentDir ? join(componentDir, componentName || values.componentName) : '',
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
  const { componentChinese, category, customizeCategory, componentPath, docPath } = result

  if(pathExistsSync(componentPath)) {
    consola.error(red(`${componentName}组件已存在，换个名呗`))
    return
  }

  createComponentFile({
    componentName,
    componentChinese,
    category, 
    customizeCategory,
    componentPath,
    docPath
  })
}

async function createComponentFile(options) {
  const {
    componentName,
    componentChinese,
    category, 
    customizeCategory,
    componentPath,
    docPath
  } = options
  const srcPath = join(componentPath, 'src')
  const indexPath = join(componentPath, 'index.ts')
  const contentPath = join(srcPath, `${upperFirst(componentName)}.tsx`)
  const cssPath = join(srcPath, `${upperFirst(componentName)}.css`)
  const propsPath = join(srcPath, 'props.ts')
  const typesPath = join(srcPath, 'types.ts')
  const mdPath = join(docPath, 'index.md')

  try {
    await Promise.all([mkdirs(componentPath), mkdirs(srcPath), mkdirs(docPath)])
    await Promise.all([
      writeFile(indexPath, createComponentIndexTemplate({ componentName })),
      writeFile(contentPath, createComponentTemplate({ componentName })),
      writeFile(cssPath, createCssTemplate({ componentName })),
      writeFile(propsPath, createPropsTemplate({ componentName })),
      writeFile(typesPath, createTypesTemplate({ componentName })),
      writeFile(mdPath, createDocTemplate({ componentName, componentChinese, category }))
    ])
  } catch(e) {
    consola.error(e)
  }
}