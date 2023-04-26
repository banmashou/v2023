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

nextTick(() => {
  new wangEditor('#editor', props)
})
</script>

<template>
  <div id="editor">
    <p>{{ modelValue }}</p>
  </div>
</template>

<style lang="scss"></style>
