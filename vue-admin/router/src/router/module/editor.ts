import { RouteRecordRaw } from "vue-router";

export default {
	name: 'editor',
	path: '/editor',
	component: () => import('@/layouts/admin.vue'),
	meta: { title: '编译器', icon: 'fas fa-baseball-ball', show: true, auth: true },
	children: [
		{
			name: 'markdown',
			path: 'markdown',
			component: () => import('@/views/editor/markdown.vue'),
			meta: {
				title: 'markdown', show: true
			},
		},
		{
			name: 'base',
			path: 'base',
			component: () => import('@/views/editor/base.vue')
		},
	]
} as RouteRecordRaw
