<script setup lang="ts">
import v from '@/plugins/validate'
const { Form, Field } = v
const onSubmit = (values) => {
  console.log(values)

  alert('提交成功')
}
</script>

<template>
  <Form @submit="onSubmit">
    <Field name="account" label="账号" :rules="{ required: true, email: true }" :validate-on-input="true" #default="{ field, errorMessage }">
      <input v-bind="field" />
      <hr />
      <p class="text-white">{{ errorMessage }}</p>
    </Field>
    <hr />
    <button>提交表单</button>
  </Form>
</template>

<style lang="scss" scoped>
div {
  @apply flex w-screen h-screen justify-center items-center bg-gray-800;
  input {
    @apply border-4 p-2 rounded-md border-violet-500 outline-none;
  }
  button {
    @apply border bg-violet-500 px-4 text-white;
  }
}
</style>
