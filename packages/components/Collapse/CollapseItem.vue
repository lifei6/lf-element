<script setup lang="ts">
import type { CollapseItemProps } from './types'
import { inject, computed } from 'vue'
import { COLLAPSE_CTX_KEY } from './constants'
import transitionEvents from './transitionEvents'
import LfIcon from '../Icon/Icon.vue'

defineOptions({
  name: 'LfCollapseItem'
})

// 1.参数
const props = defineProps<CollapseItemProps>()

// 2.折叠框提供的上下文属性和方法
const ctx = inject(COLLAPSE_CTX_KEY)
const isActive = computed(() => ctx?.activeNames.value.includes(props.name))
function handleClick() {
  if (props.disabled) return
  ctx?.handleItemClick(props.name)
}
</script>
<template>
  <div
    class="lf-collapse-item"
    :class="{
      'is-disabled': disabled
    }"
  >
    <!-- 折叠头 -->
    <div
      class="lf-collapse-item__header"
      :id="`item-header-${name}`"
      :class="{
        'is-disabled': disabled,
        'is-active': isActive
      }"
      @click="handleClick"
    >
      <span class="lf-collapse-item__title">
        <slot name="title">
          {{ title }}
        </slot>
      </span>
      <lf-icon icon="angle-right" class="header-angle" />
    </div>
    <!-- 折叠内容 -->
    <transition name="slide" v-on="transitionEvents">
      <div class="lf-collapse-item__wapper" v-show="isActive">
        <div class="lf-collapse-item__content" :id="`item-content-${name}`">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="less" scoped></style>
