<script setup lang="ts">
import { ref, computed, inject } from 'vue'
import type { ButtonProps, ButtonEmits, ButtonInstance } from './types'
import { throttle } from 'lodash-es'
import LfIcon from '../Icon/Icon.vue'
import { BUTTON_GROUP_CTX_KEY } from './constants'
defineOptions({
  name: 'LfButton'
})

// 1.属性
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  nativeType: 'button',
  useThrottle: true,
  throttleDuration: 500
})

// 2.事件
// 接收一个click点击事件
const emits = defineEmits<ButtonEmits>()
// 定义点击事件回调
const handleBtnClick = (e: MouseEvent) => {
  emits('click', e)
}
// 节流
const handlBtnCLickThrottle = throttle(handleBtnClick, props.throttleDuration)

// 3.插槽和模版引用
// 3.1 插槽
const slots = defineSlots()
const iconStyle = computed(() => ({
  // 如果图标右边有默认的东西，则设置图标右边距
  marginRight: slots.default ? '6px' : '0px'
}))
// 3.2 原始button DOM的模版引用
const _ref = ref<HTMLButtonElement>()

// 4.注入按钮组提供的上下文
const buttonGroupContext = inject(BUTTON_GROUP_CTX_KEY, null)
// 按钮组的type\size\disable优先级高于按钮自身
// 4.1 合并按钮组提供按钮的类型
const type = computed(() => {
  return buttonGroupContext?.type ?? props.type ?? ''
})
// 4.2 合并按钮组提供按钮的尺寸
const size = computed(() => {
  return buttonGroupContext?.size ?? props.size ?? ''
})
// 4.3 合并按钮组提供按钮的disabled
const disabled = computed(() => {
  return buttonGroupContext?.disabled || props.disabled || false
})

// 暴露属性
defineExpose<ButtonInstance>({
  ref: _ref,
  type,
  size,
  disabled
})
</script>
<template>
  <component
    :is="props.tag"
    class="lf-button"
    :class="{
      [`lf-button--${type}`]: type,
      [`lf-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading
    }"
    :disabled="disabled || loading ? true : void 0"
    :type="tag === 'button' ? nativeType : void 0"
    :autofocus="autofocus"
    ref="_ref"
    @click="(e: MouseEvent) => (useThrottle ? handlBtnCLickThrottle(e) : handleBtnClick(e))"
  >
    <!-- 加载图标 -->
    <template v-if="loading">
      <!-- loading插槽 -->
      <slot name="loading">
        <lf-icon
          class="loading-icon"
          :icon="loadingIcon ?? 'spinner'"
          :style="iconStyle"
          size="1x"
          spin
        ></lf-icon>
      </slot>
    </template>
    <!-- 其他图标 -->
    <template v-else-if="icon && !loading">
      <lf-icon :icon="icon" :style="iconStyle" size="1x"></lf-icon>
    </template>
    <!-- default插槽 -->
    <slot></slot>
  </component>
</template>

<style scoped lang="less">
@import './style.less';
</style>
