/**
 * @description: 路由守卫
 * @author: 斑马兽
 * @param {Router} router
 * @class Guard
 */
import { CacheEnum } from "@/enum/cacheEnum";
import util from "@/utils";
import { RouteLocationNormalized, Router } from "vue-router";

class Guard {
	constructor(private router: Router) { }

	public run() {
		this.router.beforeEach(this.beforeEach.bind(this))
	}

	private async beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
		// if (this.isLogin(to) === false) return { name: 'login' }
		// if (this.isGuest(to) === false) return from
		if (to.meta.auth && !this.token()) return { name: 'login' }
		if (to.meta.guest && this.token()) return from
	}

	private token(): string | null {
		return util.store.get(CacheEnum.TOKEN_NAME)
	}
}


export default (router: Router) => {
	new Guard(router).run()
}
