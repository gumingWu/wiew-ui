import { upperFirst } from "@wiew-ui/utils"

const template = ({ upperName }) => `\
export const ${upperName}Props = {
  
}
`

export function createPropsTemplate(options) {
  const { componentName } = options
  const upperName = upperFirst(componentName)
  return template({ upperName })
}