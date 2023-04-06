/**
 * @description: 用户相关的工具函数
 * @author: 斑马兽
 */
import { CacheEnum } from '@/enum/cacheEnum'
import store from './store'
import userApi, { ILoginData } from '@/apis/userApi'
import router from '@/router'
import userStore from '@/store/userStore'


export async function login(values: ILoginData) {
	const {
		result: { token },
	} = await userApi.login(values)
	store.set(CacheEnum.TOKEN_NAME, { token }, 10000)
	const routeName = store.get(CacheEnum.REDIRECT_ROUTE_NAME) ?? 'home'
	router.push({ name: routeName })
}

export function logout() {
	store.remove(CacheEnum.TOKEN_NAME)
	router.push('/')
	userStore().info = null
}


