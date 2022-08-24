import glob from 'fast-glob'
import matter from 'gray-matter'
import fs from 'fs-extra'
import { resolve, join } from 'path'

const DIR = resolve(__dirname, '..')
const COMP_PACKAGE = resolve(__dirname, '../components')
export const META_DIR = join(DIR, 'metadata.json')
const CATEGORY = ['Normal', 'Input', 'Show', 'Experiment']
const TEMPLATE = {
  components: CATEGORY.map(cate => ({
    text: cate,
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

  await fs.writeJSONSync(META_DIR, TEMPLATE, { spaces: 2 })
}

readComponentsFile().catch(err => console.log(err));