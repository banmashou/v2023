import { createApp } from 'vue'
import App from './App.vue'

import router, { setupRouter } from '@/router'

async function bootstrap() {
  const app = createApp(App)
  setupRouter(app)
  // 路由处理完之后再挂载页面
  await router.isReady()
  app.mount('#app')
}

bootstrap()
