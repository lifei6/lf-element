<script setup lang="ts">
import Parent from './components/Parent.vue'
import { LfButton } from 'lf-element'
import { ref } from 'vue'
const btn = ref<InstanceType<typeof LfButton>>()
function toggleTheme() {
  btn.value?.ref?.style.setProperty('--lf-button-text-color', 'red')
}
function handleCb(e: MouseEvent, msg: string) {
  console.log('click:', e, msg)
}
defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <div class="item">
    <h2>1.测试按钮基本功能</h2>
    <lf-button type="primary" ref="btn" @click="(e) => handleCb(e, 'test')">主要按钮</lf-button>
    <br />
    <button @click="toggleTheme">使用ref修改主题</button>
  </div>
  <div class="item">
    <h2>2.测试icon</h2>
    <lf-icon icon="spinner" type="primary" color="red"></lf-icon>
  </div>
  <div class="item">
    <h2>3.测试透传</h2>
    <Parent
      name="lf"
      :age="18"
      @my-event="
        () => {
          console.log('my-event')
        }
      "
    ></Parent>
  </div>
  <div class="item">
    <h2>4.测试带icon的按钮</h2>
    <LfButton type="info" loading>带图标按钮</LfButton>
    <LfButton type="success" icon="magnifying-glass">带图标按钮</LfButton>
  </div>
  <div class="item">
    <h2>5.测试按钮组</h2>
    <LfButtonGroup>
      <LfButton type="primary">主要按钮</LfButton>
      <LfButton type="success">成功按钮</LfButton>
      <LfButton type="info">信息按钮</LfButton>
      <LfButton type="warning">警告按钮</LfButton>
      <LfButton type="danger">危险按钮</LfButton>
    </LfButtonGroup>
    <br />
    <LfButtonGroup>
      <LfButton type="primary" icon="spinner"></LfButton>
      <LfButton type="success" icon="magnifying-glass"></LfButton>
    </LfButtonGroup>
    <br />
    <LfButtonGroup type="primary" disabled>
      <LfButton type="primary">主要按钮</LfButton>
      <LfButton type="success">成功按钮</LfButton>
      <LfButton type="info">信息按钮</LfButton>
    </LfButtonGroup>
  </div>
</template>

<style scoped>
.item {
  padding-bottom: 20px;
  border-bottom: 2px solid #000;
}
</style>
