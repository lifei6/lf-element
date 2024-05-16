<script setup lang="ts">
import { ref, onMounted } from "vue";
import Hellow from "./components/Hellow.vue";
const btn = ref<HTMLButtonElement>();
onMounted(() => {
  console.log(btn.value?.type);
});
</script>

<template>
  <div>
    <Hellow></Hellow>
    <lf-button nativeType="reset" type="primary" size="small" plain
      >组件button</lf-button
    >
    <button ref="btn">原生button</button>
  </div>
</template>

<style scoped></style>
