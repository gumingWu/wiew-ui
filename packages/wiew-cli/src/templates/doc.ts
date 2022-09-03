import { upperFirst } from "@wiew-ui/utils"

const template = ({ upperName, componentChinese, upperCategory }) => `\
---
category: ${upperCategory}
sidebar: ${upperName} ${componentChinese}
---

# ${upperName} ${componentChinese}
`

export function createDocTemplate(options) {
  const { componentName, componentChinese, category } = options
  const upperName = upperFirst(componentName)
  const upperCategory = upperFirst(category)
  return template({
    upperName,
    componentChinese,
    upperCategory
  })
}