import { upperFirst } from "@wiew-ui/utils"

const template = ({ componentName, sidebarAndTitle, upperCategory }) => `\
---
category: ${upperCategory}
sidebar: ${sidebarAndTitle}
---

# ${sidebarAndTitle}

:::demo
\`\`\`vue
<template>
  <w-${componentName}></w-${componentName}>
</template>
\`\`\`
:::
`

export function createDocTemplate(options) {
  const { componentName, componentChinese, category } = options
  const upperName = upperFirst(componentName)
  const upperCategory = upperFirst(category)
  const sidebarAndTitle = (componentChinese as string).toUpperCase() !== 'N' ? `${upperName} ${componentChinese}` : upperName

  return template({
    componentName,
    sidebarAndTitle,
    upperCategory
  })
}