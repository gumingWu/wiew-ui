import glob from 'fast-glob'
import matter from 'gray-matter'
import fs from 'fs-extra'
import { resolve } from 'path'

const COMP_PACKAGE = resolve(__dirname, '../components')
const TEMPLATE = {
  components: []
}

async function readComponentsFile() {
  const files = await glob('*', {
    onlyDirectories: true,
    cwd: COMP_PACKAGE
  })
  // console.log(files);
  files.forEach(async file => {
    const mdPath = `${COMP_PACKAGE}/${file}/index.md`
    const mdContent = await fs.readFile(mdPath, 'utf-8')
    const { content, data={} } = matter(mdContent)
    console.log(content, data);
    
  })
}

readComponentsFile().catch(err => console.log(err));