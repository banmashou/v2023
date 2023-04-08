
/**
 * @deprecated 菜单相关
 * @author 斑马兽
 */
import { defineStore } from 'pinia'
import { IMenu } from '#/menu'
import { RouteLocationNormalized } from 'vue-router'
import utils from '@/utils'
import { CacheEnum } from '@/enum/cacheEnum'

export default defineStore('menu', {
	state: () => {
		return {
			menus: [] as IMenu[],
			historyMenu: [] as IMenu[]
		}
	},
	actions: {
		init() {
			// this.getMenuByRoute()
			this.historyMenu = utils.store.get(CacheEnum.HISTORY_MENU) ?? []
		},

	}
})
