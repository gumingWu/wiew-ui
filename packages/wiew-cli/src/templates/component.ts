import { upperFirst } from "@wiew-ui/utils"

const template = ({ componentName, upperName }) => `\
import { defineComponent } from "vue"
import { ${upperName}Props as props } from "./props"
import type { ${upperName}PropsType } from "./types"
import './${upperName}.css'

export default defineComponent({
  name: 'W${upperName}',
  props,
  setup(props: ${upperName}PropsType) {
    return () => (
      <div class="w-${componentName}">我是W${upperName}</div>
    )
  }
})
`

export function createComponentTemplate(options) {
  const { componentName } = options
  const upperName = upperFirst(componentName)
  return template({
    componentName,
    upperName
  })
}