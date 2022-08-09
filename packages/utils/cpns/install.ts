import type { App } from 'vue'

export function createInstall(component) {
  function registerComponent(app: App, name: string, component) {
    const isRegistered = app.component(name)
    if(!isRegistered) {
      app.component(name, component)
    }
  }
  function install(app: App) {
    const { name, alias } = component
    registerComponent(app, name, component)
    if(alias) {
      alias.forEach(aliasName => {
        registerComponent(app, aliasName, component)
      })
    }
  }

  return {
    install
  }
}