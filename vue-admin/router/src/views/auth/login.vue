<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive<{ account: string; password: string | number }>({
  account: '',
  password: '',
})
</script>

<template>
  <div class="bg-slate-300 h-screen flex justify-center items-center p-5 md:p-0">
    <div class="w-[720px] bg-white md:grid grid-cols-2 rounded-md shadow-md overflow-hidden">
      <div class="p-6">
        <h2 class="text-center text-gray-700 text-lg mt-3">会员登录</h2>
        <div class="mt-8">
          <bmInput v-model="form.account" placeholder="请输入邮箱或手机号" />
          <bmInput v-model="form.password" class="mt-5" placeholder="请输入登录密码" />
        </div>
        <bmButton />
        <div class="flex gap-2 justify-center mt-5">
          <bmLink />
          <bmLink />
          <bmLink />
          <bmLink />
        </div>
      </div>
      <div>
        <img src="/images/login.jpg" class="h-80 w-full object-cover" />
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
