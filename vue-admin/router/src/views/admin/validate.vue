<script setup lang="ts">
import v from '@/plugins/validate'
const { handleSubmit, errors } = v.useForm({
  initialValues: {
    username: '斑马兽',
    password: '',
  },
  validationSchema: {
    username: v.yup.string().required().email().label('账号'),
    password: { required: true },
  },
})

const { value: usernameValue } = v.useField('username', {}, { label: '用户名' })
const { value: passwordValue } = v.useField('password', {}, { label: '密码' })

const onSubmit = handleSubmit((values) => {
  console.log(values)

  alert('提交成功')
})
</script>

<template>
  <form @submit="onSubmit">
    <section>
      <input type="text" v-model="usernameValue" />
      <p class="error" v-if="errors.username">{{ errors.username }}</p>
    </section>
    <section>
      <input type="text" v-model="passwordValue" />
      <p class="error" v-if="errors.password">{{ errors.password }}</p>
    </section>
    <button>提交</button>
  </form>
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
  .error {
    @apply border bg-red-600 p-2 text-white;
  }
}
</style>
