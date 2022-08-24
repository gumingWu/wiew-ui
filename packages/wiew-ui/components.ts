import type { App } from 'vue'
import { WButton } from '@wiew-ui/components'
import { WInput } from '@wiew-ui/components'
import { WScrollContent } from '@wiew-ui/components'
import { WVirtualScroll } from '@wiew-ui/components'

export const components = [
  WButton,
  WInput,
  WScrollContent,
  WVirtualScroll,
]

export function install(app: App) {
  components.forEach(component => app.use(component))
}