<script setup lang="ts">
import { onMounted } from 'vue'

import userApi from './apis/userApi'

// onMounted(async () => {
//   const res = await fetch(`http://localhost:5173/api/get`).then((r) => r.json())
//   console.log(res)
// })
onMounted(async () => {
  const response = await userApi.login()
  console.log(response)
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
