import Theme from 'vitepress/theme'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import WiewUI from 'wiew-ui'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import 'wiew-ui/dist/style.css'
import './styles'

export default {
  ...Theme,
  enhanceApp({ app }) {
    registerComponents(app)
    app.use(WiewUI)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  }
}