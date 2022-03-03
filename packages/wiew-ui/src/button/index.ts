import type { App } from 'vue'
import Button from './src/button'

Button.install = function(app: App) {
  app.component(Button.name, Button)
}

export default Button