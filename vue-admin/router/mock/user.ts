// test.ts

import { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
export default [
	{
		url: '/api/user/info',
		method: 'get',
		response: () => {
			return {
				code: 200,
				message: '请求成功',
				type: 'success',
				result: {
					name: '斑马兽',
					age: 18,
					avatar: '/images/bm.jpg',
					permissions: ['editor_markdown', 'article_edit']
				},
			}
		},
	},
	{
		url: '/api/login',
		method: 'post',
		response: () => {
			return {
				code: 200,
				message: '登录成功',
				type: 'success',
				result: {
					token: Random.string(46),
				},
			}
		},
	},
] as MockMethod[]
