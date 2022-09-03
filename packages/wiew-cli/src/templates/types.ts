import { upperFirst } from "@wiew-ui/utils"

const template = ({ upperName }) => `\
import { ${upperName}Props } from "./props"
import type { ExtractPropTypes } from 'vue'

export type ${upperName}PropsType = ExtractPropTypes<typeof ${upperName}Props>
`

export function createTypesTemplate(options) {
  const { componentName } = options
  const upperName = upperFirst(componentName)
  return template({ upperName })
}