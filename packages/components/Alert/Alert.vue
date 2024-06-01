<script setup lang="ts">
import type { AlertProps, AlertEmits, AlertInstance } from './types'
import { ref, useSlots, computed } from 'vue'
import { typeIconMap } from '@lf-element/utils'
import LfIcon from '../Icon/Icon.vue'

defineOptions({
  name: 'LfAlert'
})
const props = withDefaults(defineProps<AlertProps>(), {
  effect: 'light',
  type: 'info',
  closable: true
})
const emits = defineEmits<AlertEmits>()
const slots = useSlots()

// 控制Alert的可见性
const visible = ref(true)
function close() {
  visible.value = false
  emits('close')
}

function open() {
  visible.value = true
}

// 不同type属性显示不同图标
const iconName = computed(() => typeIconMap.get(props.type) ?? 'circle-info')
// description属性的优先级高于默认插槽
const withDescription = computed<boolean>(() => !!(props.description || slots.default))

defineExpose<AlertInstance>({
  open,
  close
})
</script>

<template>
  <transition name="lf-alert-fade">
    <div
      v-show="visible"
      class="lf-alert"
      role="alert"
      :class="{
        [`lf-alert__${type}`]: type,
        [`lf-alert__${effect}`]: effect,
        'text-center': center
      }"
    >
      <lf-icon
        v-if="showIcon"
        class="lf-alert__icon"
        :class="{ 'big-icon': withDescription }"
        :icon="iconName"
      />
      <div class="lf-alert__content">
        <span
          class="lf-alert__title"
          :class="{ 'with-desc': withDescription }"
          :style="{ display: center && !showIcon ? 'flow' : 'inline' }"
        >
          <slot name="title">{{ title }}</slot>
        </span>
        <p class="lf-alert__description">
          <slot>{{ description }}</slot>
        </p>
        <div class="lf-alert__close" v-if="closable">
          <lf-icon @click.stop="close" icon="xmark" />
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
@import './style.less';
</style>
