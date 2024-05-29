<script setup lang="ts">
import { provide, computed } from 'vue'
import { each } from 'lodash-es'
import type { CollapseItemName, CollapseProps, CollapseEmits, CollapseContext } from './types'
import { COLLAPSE_CTX_KEY } from './constants'

defineOptions({
  name: 'LfCollapse'
})
// 1.参数
const props = defineProps<CollapseProps>()
// 事件
const emits = defineEmits<CollapseEmits>()

// 当前展开的项
const activeNames = computed<CollapseItemName[]>(() => props.modelValue)
// 更新展开的项
function updateActiveNames(names: CollapseItemName[]) {
  // 触发自定义事件去更新激活的项
  each(['update:modelValue', 'change'], (e) => emits(e as 'update:modelValue' & 'change', names))
}

// 处理Item的点击事件
function handleItemClick(item: CollapseItemName) {
  let _activeNames = [...activeNames.value]
  // 手风琴模式
  if (props.accordion) {
    _activeNames = [_activeNames[0] === item ? '' : item]
    updateActiveNames(_activeNames)
    return
  }

  const index = _activeNames.indexOf(item)
  if (index > -1) {
    // 存在，删除数组中的一项
    _activeNames.splice(index, 1)
  } else {
    // 不存在，插入对应 name
    _activeNames.push(item)
  }
  updateActiveNames(_activeNames)
}

// 提供给子组件使用的上下文属性和方法
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
