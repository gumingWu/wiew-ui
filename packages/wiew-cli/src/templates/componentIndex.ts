import { upperFirst } from "@wiew-ui/utils"

const template = ({ upperName }) => `\
import ${upperName} from "./src/${upperName}"
import { createInstall } from '@wiew-ui/utils'

export const W${upperName} = createInstall(${upperName})
export default W${upperName}
`

export function createComponentIndexTemplate(options) {
  const { componentName } = options
  const upperName = upperFirst(componentName)
  return template({ upperName })
}