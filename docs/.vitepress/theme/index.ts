import Theme from 'vitepress/theme'
import WiewUI from 'wiew-ui'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import './styles'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(WiewUI)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  }
}