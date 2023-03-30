<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(async () => {
  const res = await fetch(`http://localhost:5173/api/get`).then((r) => r.json())
  console.log(res)
})
</script>

<template>
  <ul class="bg-red-500">
    <li>首页</li>
    <li>商品</li>
    <li>评价</li>
  </ul>
  <router-view />
</template>

<style></style>
