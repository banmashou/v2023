/**
 * @description: 路由配置
 * @author: 斑马兽
 */
import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import aotoload from './autoload'
import guard from './guard'

const router = createRouter({
	history: createWebHistory(),
	routes: [...routes],
})

export function setupRouter(app: App) {
	aotoload(router)
	guard(router)
	app.use(router)
}

export default router
