import Theme from 'vitepress/theme'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import { registerComponents } from './register-components'
import WiewUI from 'wiew-ui'
import 'wiew-ui/dist/style.css'
import './styles/var.css'

export default {
  ...Theme,
  enhanceApp({ app }) {
    registerComponents(app)
    app.use(WiewUI)
  }
}