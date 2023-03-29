import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from '@/router'
import { setupPlugins } from './plugins'

async function bootstrap() {
  const app = createApp(App)
  setupRouter(app)
  setupPlugins(app)
  // 先加载路由，再挂载app
  await router.isReady()
  app.mount('#app')
}

bootstrap()
