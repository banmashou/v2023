<script setup lang="ts">
import { ref } from 'vue'

const activeName = ref('site')
</script>

<template>
  <div class="notification">
    <i class="fas fa-align-justify"></i>
    <el-tabs v-model="activeName" class="lists">
      <el-tab-pane label="系统通知" name="site">
        <a href="">啊大苏打那时的你九三大数据的你</a>
        <a href="">啊大苏打那时的你九三大数据的你</a>
        <a href="">啊大苏打那时的你九三大数据的你</a>
      </el-tab-pane>
      <el-tab-pane label="站内通知" name="message"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="scss">
.notification {
  @apply relative;
  .lists {
    @apply absolute bg-white p-5 border rounded-sm shadow-md right-0 z-10 w-[300px];
  }
}
</style>
