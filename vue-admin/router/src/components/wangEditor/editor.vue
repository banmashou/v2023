<script setup lang="ts">
import { nextTick } from 'process'
import wangEditor from './wangEditor'

interface Props {
  height?: number
  modelValue?: string
}

const props = withDefaults(defineProps<Props>(), {
  height: 300,
})

const emit = defineEmits(['update:modelValue'])

nextTick(() => {
  new wangEditor(
    '#editor',
    (newHtml: string) => {
      emit('update:modelValue', newHtml)
    },
    props,
  )
})
</script>

<template>
  <div id="editor">
    <p>{{ modelValue }}</p>
  </div>
</template>

<style lang="scss"></style>
