import sidebar from '../sidebar'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'

module.exports = {
  title: 'Wiew-UI',
  description: 'Wiew-UI组件库文档',
  themeConfig: {
    sidebar
  },
  markdown: {
    config: (md) => {
      md.use(demoBlockPlugin)
    }
  }
}