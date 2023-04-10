/**
 * @description: 自动加载路由
 * @author: 斑马兽
 */
import util from "@/utils";
import { RouteRecordRaw, Router } from "vue-router";
import getRoutes from "./view";
import autoloadModuleRoutes from "./module";


// 如果开启了自动加载路由，则调用getRoutes()自动路由，否则调用autoloadModuleRoutes模块路由
let routes: RouteRecordRaw[] = util.env.VITE_ROUTER_AUTOLOAD ? getRoutes() : autoloadModuleRoutes()

function autoload(router: Router) {
	routes.forEach(route => {
		router.addRoute(route)
	});
}
// 通过权限过滤掉路由
export default autoload
