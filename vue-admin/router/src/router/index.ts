/**
 * @description: 路由配置
 * @author: 斑马兽
 */
import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import aotoloadRoutes from './autoload'
import guard from './guard'

const router = createRouter({
	history: createWebHistory(),
	routes: [...routes, ...aotoloadRoutes],
})

export function setupRouter(app: App) {
	guard(router)
	app.use(router)
}

export default router
