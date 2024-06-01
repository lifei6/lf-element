<script setup lang="ts">
import { ref } from 'vue'
import type { CollapseItemName } from 'lf-element'
const activeNames = ref<CollapseItemName[]>([])
function handleChange(val: CollapseItemName[]) {
  console.log(val)
}
</script>

<template>
  <p>
    <lf-collapse v-model="activeNames" @change="handleChange">
      <lf-collapse-item title="标题1" name="a">内容1</lf-collapse-item>
      <lf-collapse-item title="标题2" name="b">内容2</lf-collapse-item>
      <lf-collapse-item title="标题3" name="c">内容3</lf-collapse-item>
    </lf-collapse>
  </p>
</template>
