import { lowerFirst, bigCamelCase, compose } from '@wiew-ui/utils'

export function componentsAction(options) {
  const componentName = compose(lowerFirst, bigCamelCase)(options.name || '')

  console.log(componentName);
}