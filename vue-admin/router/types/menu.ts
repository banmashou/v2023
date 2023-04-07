/**
 * 定义菜单类型
 * @author: 斑马兽
 * @interface Menu
 */
interface Menu {
	title?: string
	icon?: string
	isClcik?: boolean
	route?: string
}

export interface IMenu extends Menu {
	children?: Menu[]
}
