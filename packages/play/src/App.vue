<script setup lang="ts">
import Parent from './components/Parent.vue'
import WrapperCpn from './components/Wrapper.jsx'
import { LfButton } from 'lf-element'
import { ref } from 'vue'
// 按需引入样式
// import 'lf-element/dist/theme/Button.css'
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

// 测试折叠器
const activeNames = ref<string[]>([])
function handleChange(newVal: string[] | number[]) {
  console.log('handleChange:', newVal)
}
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
  <div class="item">
    <h2>6.测试折叠器</h2>
    <p>activeNames:{{ activeNames }}</p>
    <lf-button type="primary" @click="activeNames = ['A', 'B']">点击全部展开</lf-button>
    <lf-button type="primary" @click="activeNames = []">点击全部折叠</lf-button>
    <lf-collapse v-model="activeNames" style="width: 400px" accordion @change="handleChange">
      <lf-collapse-item title="一致性 Consistency" name="A">
        <template #title>
          <h3 style="color: red">我是title插槽内容</h3>
        </template>
        <template #default>
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、元素的位置等。</div>
        </template>
      </lf-collapse-item>
      <lf-collapse-item title="反馈 Feedback" name="B">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </lf-collapse-item>
      <lf-collapse-item title="效率 Efficiency" name="C" disabled>
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
      </lf-collapse-item>
    </lf-collapse>
  </div>
  <div class="item">
    <h2>7.测试折叠器v-model</h2>
    <WrapperCpn />
  </div>
</template>

<style scoped>
.item {
  padding-bottom: 20px;
  border-bottom: 2px solid #000;
}
</style>
