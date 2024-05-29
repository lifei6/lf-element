<script setup lang="ts">
import { provide, watch } from 'vue'
import type { CollapseItemName, CollapseProps, CollapseEmits, CollapseContext } from './types'
import { COLLAPSE_CTX_KEY } from './constants'
import { debugWarn } from '@lf-element/utils'

const COMPONENT_NAME = 'LfCollapse'

defineOptions({
  name: COMPONENT_NAME
})
// 1.参数
const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()

// 2.v-model
const activeNames = defineModel<CollapseItemName[]>({ required: true })

if (props.accordion) {
  watch(
    () => activeNames.value,
    (val) => {
      if (val.length > 1) {
        debugWarn(
          COMPONENT_NAME,
          `accordion mode have and only one active item, but you have ${activeNames.value.length}.`
        )
      }
    },
    { immediate: true }
  )
}

// 3.item点击事件
function handleItemClick(item: CollapseItemName) {
  let _activeNames = [...activeNames.value]
  // 手风琴模式
  if (props.accordion) {
    _activeNames = [_activeNames[0] === item ? '' : item]
    activeNames.value = _activeNames
    emits('change', _activeNames)
    return
  }
  // 非手风琴模式
  const index = _activeNames.indexOf(item)
  if (index > -1) {
    // 存在，删除数组中的一项
    _activeNames.splice(index, 1)
  } else {
    // 不存在，插入对应 name
    _activeNames.push(item)
  }
  activeNames.value = _activeNames
  emits('change', _activeNames)
}

// 4.提供给子组件使用的上下文属性和方法
provide<CollapseContext>(COLLAPSE_CTX_KEY, {
  activeNames,
  handleItemClick
})
</script>

<template>
  <div class="lf-collapse">
    <slot></slot>
  </div>
</template>

<style lang="less">
@import './style.less';
</style>
