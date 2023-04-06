/**
 * @description: 自动加载路由
 * @author: 斑马兽
 */
import util from "@/utils";
import { RouteRecordRaw } from "vue-router";
import getRoutes from "./view";
import autoloadModuleRoutes from "./module";

let routes = [] as RouteRecordRaw[]
// 如果开启了自动加载路由，则调用getRoutes()自动路由，否则调用autoloadModuleRoutes模块路由
if (util.env.VITE_ROUTER_AUTOLOAD) {
	routes = getRoutes()
} else {
	routes = autoloadModuleRoutes()
}

// 通过权限过滤掉路由
export default routes
