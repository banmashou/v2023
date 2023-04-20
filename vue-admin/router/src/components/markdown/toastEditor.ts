export default class {
	constructor(el: string, height: string, initialValue: string) {
		const editor = new toastui.Editor({
			el: document.querySelector(el),
			previewStyle: 'vertical',
			height: height,
			initialValue: initialValue
		})
	}
}
