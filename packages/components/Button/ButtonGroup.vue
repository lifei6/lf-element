<script setup lang="ts">
import { provide, toRef, reactive } from 'vue'
import type { ButtonGroupProps } from './types'
import { BUTTON_GROUP_CTX_KEY } from './constants'

defineOptions({
  name: 'LfButtonGroup'
})

const props = defineProps<ButtonGroupProps>()

// 提供上下文
provide(
  BUTTON_GROUP_CTX_KEY,
  reactive({
    size: toRef(props, 'size'),
    type: toRef(props, 'type'),
    disabled: toRef(props, 'disabled')
  })
)
</script>

<template>
  <div class="lf-button-group">
    <slot></slot>
  </div>
</template>

<style lang="less" scoped>
@import './style.less';
</style>
