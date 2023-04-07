<script setup lang="ts">
// import menuStore from '@/store/menuStore'
// const menu = menuStore()

import menuService from '@/composables/menu'
</script>

<template>
  <div class="hidden md:block p-3 border-t border-b bg-gray-50 shadow-lg" v-show="menuService.history.value.length">
    <div class="grid grid-flow-col gap-2 justify-start">
      <div
        v-for="item of menuService.history.value"
        class="border hover:bg-violet-600 hover:text-white duration-300 rounded-sm shadow-sm py-2 px-3 text-sm text-gray-600"
        :class="{ 'bg-violet-600 text-white': $route.name == item.route }">
        <router-link :to="{ name: item.route }">
          {{ item.title }}
        </router-link>
        <i class="fas fa-times ml-1 cursor-pointer hover:text-red-400 duration-300"></i>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
