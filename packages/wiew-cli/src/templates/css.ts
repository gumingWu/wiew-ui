const template = ({ componentName }) => `\
.w-${componentName} {
  
}
`

export function createCssTemplate(options) {
  return template(options)
}