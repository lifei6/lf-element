<script setup lang="ts">
// import { ErMessage } from 'eric-ui'
function handleBtnClick() {
  // ErMessage.info('btn click')
  console.info('btn click')
}
</script>

<template>
  <p>
    <lf-button @click="handleBtnClick" :throttle-duration="2000"> with throttle</lf-button>
    <lf-button :use-throttle="false" @click="handleBtnClick">without throttle</lf-button>
  </p>
</template>
