<script setup lang="ts">
import Editor from '@/components/wangEditor/editor.vue'
import { ref } from 'vue'

const content = ref('abc')
</script>

<template>
  <div>
    <Editor v-model="content" />
  </div>
</template>

<style lang="scss"></style>
