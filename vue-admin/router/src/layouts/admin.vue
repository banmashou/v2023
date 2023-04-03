<script setup lang="ts"></script>

<template>
	<router-view />
</template>

<style lang="scss" scoped>
</style>

<script lang="ts">
export default {
	route: { meta: { auth: true } },
};
</script>
