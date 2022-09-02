import { lowerFirst, bigCamelCase, compose } from '@wiew-ui/utils'

export function projectAction(options) {
  const projectName = options.name || ''

  console.log(projectName);
}