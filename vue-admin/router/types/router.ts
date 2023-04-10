// typings.d.ts or router.ts
import 'vue-router'
import { IMenu } from './menu'

/**
 * @description 路由元信息
 * @author 斑马兽
 */
declare module 'vue-router' {
	interface RouteMeta {
		// 是否是登录用户
		auth?: boolean,
		// 是否是游客
		guest?: boolean,
		menu?: IMenu,
		enterClass?: string,
		leaveClass?: string,
		// 权限
		permission?: string[],
	}
}
