import { defineConfig } from 'vitepress'
import { components } from '../metadata.json'

const guideSidebar = [
  {
    text: '基础',
    items: [
      { text: '快速开始', link: '/guide/' }
    ]
  },
  {
    text: '进阶',
    items: [
      { text: '国际化', link: '/guide/i18n' }
    ]
  }
]
let componentNav
const componentsSidebar = componentNav = components


export default defineConfig({
  themeConfig: {
    siteTitle: 'Wiew-UI',
    logo: '/cat.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/gumingWu/wiew-ui' }
    ],
    nav: [
      { text: '指南', items: guideSidebar },
      { text: '组件', items: componentNav }
    ],
    sidebar: {
      '/guide/': guideSidebar,
      '/components/': componentsSidebar,
    }
  }
})