<script setup lang="ts">
import { nextTick } from 'process'
import wangEditor from './wangEditor'

interface Props {
  height?: number
}

const props = withDefaults(defineProps<Props>(), {
  height: 300,
})

nextTick(() => {
  new wangEditor('#editor', props)
})
</script>

<template>
  <div id="editor">
    <p>欢迎使用</p>
  </div>
</template>

<style lang="scss"></style>
