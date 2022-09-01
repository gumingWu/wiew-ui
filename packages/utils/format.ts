export function lowerFirst(str: string) {
  if(str === '') return ''
  return str[0].toLocaleLowerCase() + str.slice(1)
}

export function upperFirst(str: string) {
  if(str === '') return ''
  return str[0].toUpperCase() + str.slice(1)
}

// 大驼峰转换
export function bigCamelCase(str: string) {
  const strArr = str.split('-')

  return strArr.reduce((pre, cur) => {
    if(cur === '')
      return pre
    return pre + upperFirst(cur)
  })
}

export function compose(...funcs: Function[]) {
  if(funcs.length === 0) {
    return <T>(arg: T) => arg
  }

  if(funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce(
    (a, b) =>
      (...args: any) =>
        a(b(...args))
  )
}
