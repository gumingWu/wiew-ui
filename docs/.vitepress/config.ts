import { defineConfig } from 'vitepress'

const guideSidebar = () => [
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

export default defineConfig({
  themeConfig: {
    siteTitle: 'Wiew-UI',
    logo: '/cat.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/gumingWu/wiew-ui' }
    ],
    sidebar: {
      '/guide/': guideSidebar(),
    }
  }
})