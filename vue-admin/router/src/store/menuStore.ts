
/**
 * @deprecated 菜单相关
 * @author 斑马兽
 */
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export default defineStore('router', {
	state: () => {
		return {
			menus: null
		}
	},
	actions: {
		// 获取菜单
		getMenuByRoute() {
			const router = useRouter()
			const routes = router.getRoutes()
				.filter(route => route.children.length && route.meta.show)
				.map(route => {
					route.children = route.children.filter(route => route.meta?.show)
					return route
				})
				.filter(route => route.children.length)
			return routes
		}
	}
})

// 获取菜单可用路由
function getRoutes() {
	const router = useRouter()
	const routes = router.getRoutes()
		.filter(route => route.children.length && route.meta.show)
		.map(route => {
			route.children = route.children.filter(route => route.meta?.show)
			return route
		})
		.filter(route => route.children.length)
	return routes
}
