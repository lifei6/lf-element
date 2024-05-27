<script setup lang="ts">
import Children from './Children.vue'
defineOptions({
  name: 'lf-parent'
  // inheritAttrs: false
})
// defineProps<{ name: string }>()
// const emit = defineEmits(['click'])
</script>

<template>
  <Children></Children>
</template>

<style lang="less" scoped></style>
