<script lang="ts" setup>
import { shallowRef } from 'vue'

const component = shallowRef()

const init = async () => {
  const componentPromiseItem = import.meta.glob('./themes/*/index.vue', { import: 'default' })[`./themes/${import.meta.env.VITE_THEME}/index.vue`]
  component.value = await componentPromiseItem()
}

init()
</script>

<template>
  <component :is="component"/>
</template>