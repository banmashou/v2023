// typings.d.ts or router.ts
import 'vue-router'

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
		// 路由是否在菜单中显示
		show?: boolean,
		// 菜单标题
		title?: string,
		// 菜单图标
		icon?: string,
		// 是否在菜单中被点击
		isClick?: boolean,
		// 权限
		permission?: string[],
	}
}
