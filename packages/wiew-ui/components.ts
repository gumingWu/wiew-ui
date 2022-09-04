import type { App } from 'vue'
import { WButton } from "@wiew-ui/components"
import { WEditor } from "@wiew-ui/components"
import { WInput } from "@wiew-ui/components"
import { WLoadContainer } from "@wiew-ui/components"
import { WModal } from "@wiew-ui/components"
import { WScrollContent } from "@wiew-ui/components"
import { WVirtualScroll } from "@wiew-ui/components"


export const components = [
	WButton,
	WEditor,
	WInput,
	WLoadContainer,
	WModal,
	WScrollContent,
	WVirtualScroll,

]

export function install(app: App) {
  components.forEach(component => app.use(component))
}
