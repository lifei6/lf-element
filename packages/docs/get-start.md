---
search: false
next:
  link: /components/button
  text: Button 按钮
---

# 小李子的Vue3组件库

## 安装

::: code-group

```sh [npm]
npm install lf-element
```

```sh [pnpm]
pnpm add lf-element
```

```sh [yarn]
yarn add lf-element
```

:::

## 开始使用

**全局使用**

```ts towslash
// main.ts
// 引入所有组件
import LfElement from 'lf-element'
// 引入全部样式
import 'lf-element/dist/style.css'

import App from './App.vue'
// 全局使用
createApp(App).use(LfElement).mount('#app')
```

```vue
<template>
  <lf-button>我是 Button</lf-button>
</template>
```

**按需导入**

LfElement提供了基于 ES Module 的开箱即用的 Tree Shaking 功能。

包括组件和组件样式的按需引入

```vue towslash
<template>
  <lf-button>我是 Button</lf-button>
</template>
<script setup>
import { LfButton } from 'lf-element'
import 'lf-element/dist/theme/Button.css'
</script>
```
