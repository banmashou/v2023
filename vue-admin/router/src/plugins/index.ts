import { App } from 'vue'
import { setupTailwindcss } from './tailwindcss'
import _ from 'lodash'

export function setupPlugins(app: App) {
  autoRegisterComponent(app)
  setupTailwindcss()
}

// 自动注册全局组件
function autoRegisterComponent(app: App) {
  const compoents: Record<string, any> = import.meta.glob('../components/form/*.vue', { eager: true })
  Object.keys(compoents).forEach((key) => {
    const name = key.split('/').pop()?.split('.').shift() as string
    app.component(_.camelCase(name), compoents[key].default)
  })
}
