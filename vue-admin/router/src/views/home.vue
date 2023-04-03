<script setup lang="ts"></script>

<template>
  <div class="h-screen w-screen bg-gray-700 flex flex-col justify-center items-center">
    <img src="/images/bm.jpg" class="w-40 h-40 object-cover rounded-full border-8 border-white mb-5" />
    <router-link :to="{ name: 'admin.bm' }" class="bm-button">后台管理</router-link>
    <div class="text-gray-200 text-sm font-mono drop-shadow-md mt-3">MIT Licensed | Copyright © 2023-斑马兽-banmashou</div>
  </div>
</template>

<style lang="scss"></style>

<script lang="ts">
export default {
  route: { name: 'home' },
}
</script>
