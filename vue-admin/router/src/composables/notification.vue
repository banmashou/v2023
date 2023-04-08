<script setup lang="ts">
import { nextTick, ref } from 'vue'

const activeName = ref('site')
const show = ref(false)

nextTick(() => {
  document.documentElement.addEventListener('click', () => {
    show.value = false
  })
})
</script>

<template>
  <div class="notification">
    <i class="fas fa-align-justify" @click.stop="show = !show"></i>
    <el-tabs v-model="activeName" class="lists" v-show="show" @click.stop>
      <el-tab-pane label="系统通知" name="site">
        <a href="">啊大苏打那时的你九三大数据的你啊大苏打那时的你九三大数据的你</a>
        <a href="">啊大苏打那时的你九三大数据的你啊大苏打那时的你九三大数据的你</a>
        <a href="">啊大苏打那时的你九三大数据的你啊大苏打那时的你九三大数据的你</a>
      </el-tab-pane>
      <el-tab-pane label="站内通知" name="message"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="scss">
.notification {
  @apply relative;
  .lists {
    @apply absolute bg-white px-3 py-2 border rounded-sm shadow-md right-[-60px] z-10 w-[300px] text-sm;
    a {
      @apply truncate overflow-hidden block border-b pb-2 my-2 hover:text-fuchsia-700;
    }
  }
}
</style>
