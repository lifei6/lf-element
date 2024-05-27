<script setup lang="ts">
defineOptions({
  name: 'lf-children',
  inheritAttrs: false
})
</script>

<template>
  <div class="children">
    <p>children $attrs:{{ $attrs }}</p>
    <p>children $attrs.onMyEvent:{{ $attrs.onMyEvent }}</p>
  </div>
</template>

<style lang="less" scoped></style>
