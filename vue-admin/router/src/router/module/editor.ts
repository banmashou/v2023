/**
 * @description: 编辑器路由
 * @author: 斑马兽
 */
import { RouteRecordRaw } from "vue-router";

export default {
	name: 'editor',
	path: '/editor',
	component: () => import('@/layouts/admin.vue'),
	meta: { auth: true, menu: { title: '编译器', icon: 'fas fa-baseball-ball' } },
	children: [
		{
			name: 'base',
			path: 'base',
			component: () => import('@/views/editor/base.vue'),
			meta: { permission: 'base_editor', menu: { title: '富文本编译器' } },
		},
		{
			name: 'markdown',
			path: 'markdown',
			component: () => import('@/views/editor/markdown.vue'),
			meta: { permission: 'markdown_editor', menu: { title: 'markdown' } },
		}
	]
} as RouteRecordRaw
