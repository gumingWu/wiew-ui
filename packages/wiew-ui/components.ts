import type { App } from 'vue'
import { WButton } from "@wiew-ui/components"
import { WEditor } from "@wiew-ui/components"
import { WInput } from "@wiew-ui/components"
import { WLoadBox } from "@wiew-ui/components"
import { WModal } from "@wiew-ui/components"
import { WRightMenu } from "@wiew-ui/components"
import { WScrollContent } from "@wiew-ui/components"
import { WTree } from "@wiew-ui/components"
import { WVirtualScroll } from "@wiew-ui/components"


export const components = [
	WButton,
	WEditor,
	WInput,
	WLoadBox,
	WModal,
	WRightMenu,
	WScrollContent,
	WTree,
	WVirtualScroll,

]

export function install(app: App) {
  components.forEach(component => app.use(component))
}
