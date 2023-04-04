<script setup lang="ts">
import MenuCompoent from './admin/menu.vue'
</script>

<template>
  <div class="admin h-screen w-screen flex">
    <MenuCompoent />
    <div class="content flex-1 bg-gray-200">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  route: { meta: { auth: true } },
}
</script>
