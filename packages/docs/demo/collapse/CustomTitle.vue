<script setup lang="ts">
import { ref } from 'vue'
const activeNames = ref<string[]>([])
</script>

<template>
  <p>
    <lf-collapse v-model="activeNames">
      <lf-collapse-item name="a">
        <template #title>
          <strong>自定义title插槽标题1</strong>
        </template>
        内容1
      </lf-collapse-item>
      <lf-collapse-item title="title属性标题2" name="b">内容2</lf-collapse-item>
      <lf-collapse-item title="title属性标题2" name="c">内容3</lf-collapse-item>
    </lf-collapse>
  </p>
</template>
