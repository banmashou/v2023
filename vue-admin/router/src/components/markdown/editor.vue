<script setup lang="ts">
import { nextTick } from 'vue'
import ToastEditor from './toastEditor'

interface IProps {
  modelValue?: string
  height?: number
  placeholder?: string
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: '',
  height: 500,
  placeholder: '',
})

const emit = defineEmits(['update:modelValue'])

nextTick(() => {
  const toastUi = new ToastEditor('#markdownEditor', `${props.placeholder}`, `${props.height}px`)
  toastUi.editor.on('change', (type: string) => {
    // const content = type == 'markdown' ? toastUi.editor.getMarkdown() : toastUi.editor.getHTML()
    // emit('update:modelValue', content)
    emit('update:modelValue', toastUi.editor[type == 'markdown' ? 'getMarkdown' : 'getHTML']())
  })
})
</script>

<template>
  <div id="markdownEditor"></div>
</template>

<style lang="scss">
@import 'https://uicdn.toast.com/editor/latest/toastui-editor.min.css';
// @import '@/assets/tui-image-editor.min.css';

#markdownEditor {
  @apply bg-white;

  .fullscreen {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background-color: #fff;
  }
}
</style>
