import { RouteRecordRaw } from 'vue-router'

// 获取 layouts 文件夹下所有 .vue 文件
// import.meta.globEager 已经弃用
// const layouts = import.meta.globEager('../layouts/*.vue')
const layouts = import.meta.glob('../layouts/*.vue', { eager: true })
// console.log(layouts)

Object.entries(layouts).forEach(([file, module]) => {
  // console.log(module)
  const route = getRouteByModule(file, module)
})

// 获取路由
function getRouteByModule(file: string, module: { [key: string]: any }) {
  // console.log(file.split('/').pop()?.split('.')[0])
  // console.log(file.match(/\.\.\/layouts\/(?<name>.+?)\.vue/i)?.groups?.name)
  const name = file.replace(/.+layouts\/|\.vue/gi, '')

  const route = {
    name,
    path: `/${name}`,
    component: module.default,
  } as RouteRecordRaw

  return route
}

const layoutRoutes = [] as RouteRecordRaw[]

export default layoutRoutes
