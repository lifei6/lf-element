<script setup lang="ts">
import { ref } from 'vue'
const activeNames = ref<string[]>([])
</script>

<template>
  <p>
    <lf-collapse v-model="activeNames">
      <lf-collapse-item title="标题1" name="a" disabled>内容1</lf-collapse-item>
      <lf-collapse-item title="标题2" name="b">内容2</lf-collapse-item>
      <lf-collapse-item title="标题3" name="c">内容3</lf-collapse-item>
    </lf-collapse>
  </p>
</template>
