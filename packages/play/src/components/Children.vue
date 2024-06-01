<script setup lang="ts">
// import { useSlots } from 'vue'
defineOptions({
  name: 'lf-children',
  inheritAttrs: false
})
// const slots = useSlots()
// console.log('slots.default:', !!(false || slots.default))
</script>

<template>
  <div class="children">
    <p>children $attrs:{{ $attrs }}</p>
    <p>children $attrs.onMyEvent:{{ $attrs.onMyEvent }}</p>
    <div role="alert">role</div>
  </div>
</template>

<style lang="less" scoped></style>
