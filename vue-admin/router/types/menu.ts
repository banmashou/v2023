/**
 * 定义菜单类型
 * @author: 斑马兽
 * @interface Menu
 */
interface Menu {
	title: string
	icon?: string
	isClcik?: boolean
}

export interface IMenu extends Menu {
	children: Menu[]
}
