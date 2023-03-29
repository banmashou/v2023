import vue from '@vitejs/plugin-vue'
import { Plugin } from 'vite'
import { setupMockPlugin } from './mock'
export default function setupPlugins(isBuild: boolean, env: ViteEnv) {
  const plugins: Plugin[] = [vue()]

  console.log(env.VITE_ROUTE_AUTOLOAD)

  plugins.push(setupMockPlugin(isBuild))
  return plugins
}
