import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import alias from './vite/alias'
import { parseEvn } from './vite/util'
import setupPlugins from './vite/plugins'
import { visualizer } from 'rollup-plugin-visualizer'

export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command == 'build'
  const root = process.cwd()
  const env = parseEvn(loadEnv(mode, root))
  return {
    plugins: [...setupPlugins(isBuild, env), visualizer()],
    resolve: {
      alias,
    },
    build: {
      rollupOptions: {
        emptyOutDir: true,
        output: {
          manualChunks(id: string) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          },
        },
      },
    },
  }
}
