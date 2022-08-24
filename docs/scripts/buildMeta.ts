import glob from 'fast-glob'
import matter from 'gray-matter'
import fs from 'fs-extra'
import { resolve, join } from 'path'

const DIR = resolve(__dirname, '..')
const COMP_PACKAGE = resolve(__dirname, '../components')
export const META_DIR = join(DIR, 'metadata.json')
const CATEGORY = [
  { id: 'Normal', label: '基础组件' },
  { id: 'Show', label: '数据展示组件' },
  { id: 'Experiment', label: '实验性组件' },
]
const TEMPLATE = {
  components: CATEGORY.map(cate => ({
    text: cate.id,
    items: []
  }))
}

async function readComponentsFile() {
  const files = await glob('*', {
    onlyDirectories: true,
    cwd: COMP_PACKAGE
  })
  
  await Promise.all(files.map(async file => {
    const mdPath = `${COMP_PACKAGE}/${file}/index.md`
    const mdContent = await fs.readFile(mdPath, 'utf-8')
    const { content, data={} } = matter(mdContent)
    
    const category = data.category || 'Unknow'
    const matchTemplate = TEMPLATE.components.find(tem => tem.text === category)
    if(matchTemplate) {
      matchTemplate.items.push({
        text: data.sidebar,
        link: `/components/${file}/`
      })
    }
  }))

  // 类型替换成中文
  TEMPLATE.components.forEach(component => {
    component.text = CATEGORY.find(item => item.id === component.text).label
  })

  await fs.writeJSONSync(META_DIR, TEMPLATE, { spaces: 2 })
}

readComponentsFile().catch(err => console.log(err));