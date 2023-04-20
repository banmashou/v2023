export default class {
	editor: toastui.Editor
	constructor(el: string, height: string, initialValue: string) {
		this.editor = new toastui.Editor({
			el: document.querySelector(el),
			initialEditType: 'markdown',
			previewStyle: 'vertical',
			height: height,
			initialValue: initialValue
		})
		this.editor.getMarkdown()
	}
}
