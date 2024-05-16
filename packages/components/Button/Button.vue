<script setup lang="ts">
import { ref } from "vue";
import type { ButtonProps } from "./types";
defineOptions({ name: "LfButton" });
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: "button",
  useThrottle: true,
  throttleDuration: 500,
});
const slots = defineSlots();
const _ref = ref<HTMLButtonElement>();
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
      'is-loading': loading,
    }"
    :disabled="disabled || loading ? true : void 0"
    :type="tag === 'button' ? nativeType : void 0"
    :autofocus="autofocus"
    ref="_ref"
  >
    <slot></slot>
  </component>
</template>

<style lang="less" scoped></style>
