<script lang="ts" setup>
const color = import.meta.env.VITE_COLOR
</script>

<template>
  <h1 :style="{ color: color }">This is a beta about page</h1>
</template>

<style scoped>
h1 {
  margin: 20px 0;
  text-align: center;
}
</style>