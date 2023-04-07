/**
 * @description: 左侧菜单
 * @author: 斑马兽
 */
import { IMenu } from "#/menu";
import { CacheEnum } from "@/enum/cacheEnum";
import router from "@/router";
import utils from "@/utils";
import { ref } from "vue";
import { RouteLocationNormalizedLoaded } from "vue-router";

class Menu {
	public menus = ref<IMenu[]>([])
	public history = ref<IMenu[]>([])
	public close = ref(false)
	constructor() {
		this.menus.value = this.getMenuByRoute()
		this.history.value = utils.store.get(CacheEnum.HISTORY_MENU) ?? []
	}

	// 关闭菜单
	toggleState() {
		this.close.value = !this.close.value
	}

	// 点击菜单
	setCurrentMenu(route: RouteLocationNormalizedLoaded) {
		this.menus.value.forEach(m => {
			m.isClcik = false
			m.children?.forEach(c => {
				c.isClcik = false
				if (c.route === route.name) {
					m.isClcik = true
					c.isClcik = true
				}
			})
		})
	}

	// 根据路由获取菜单
	getMenuByRoute() {
		return router.getRoutes()
			.filter(route => route.children.length && route.meta.menu)
			.map(route => {
				let menu: IMenu = { ...route.meta?.menu }
				menu.children = route.children.filter(route => route.meta?.menu)
					.map(route => {
						return { ...route.meta?.menu, route: route.name }
					}) as IMenu[]
				return menu
			})
			.filter(menu => menu.children?.length)
	}
}

export default new Menu()
