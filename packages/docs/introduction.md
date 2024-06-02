---
pageClass: custom-page-class
title: 介绍
description: 主要技术
next:
  link: /get-start
  text: 开始使用
outline: deep
---

# 介绍

这是一个小李子创建的组件库，模仿了 Element Plus 的编写方式

## 技术栈

### 构建工具

- Vite
- Vue3
- TypeScript

### 样式

- Less

- unocss

  原子样式生成器，非常好用！

### 测试

- Vitest

  下一代测试框架

- Vue Test Utils

  Vue 官方提供的测试工具库

  > `Vue Test Utils (VTU)` 是一组实用函数，旨在简化 Vue.js 组件的测试。它提供了一些以隔离方式挂载 Vue 组件并与之交互的方法。

- Storybook

  以故事的形式编写组件案例，通过配置各种属性可以直观的看出组件呈现的效果

### 代码检查和格式化

- ESLint

  代码检查工具和格式化工具，使用插件可以使ESLint具有Prettier的功能

- Prettier

  代码格式化工具，用于格式化代码

### 站点生成

- VitePress

  静态站点生成器（SSG）,可以以 markdown 文件的形式来编写文档,并生成可以轻松部署到任何地方的静态 HTML 页面。
  

::: info

内部使用了`markdown-it`解析器解析md文档，每个md文档就是一个vue的SFC组件，最终会编译为一个html页面，可以在md内部使用`<scripte setup>`生成一些页面所需的数据和逻辑以及使用`<style module>`来覆盖和编写一些局部样式。`markdown-it`内部借助了`shiki`来高亮代码。

:::

- shiki

  重点是配置`tansformers`转化器进行各种类型的代码高亮，如

  1. `transformerTwoslash`：使鼠标悬停时显示类型注释；
  2. `transformerNotationDiff`：配置git提交时的diff风格；
  3. `transformerNotationHighlight`：配置使用注释高亮行；
  4. `transformerNotationFocus`：聚焦某行。

### 自动部署

- Github Actions

  1. Lint
  2. Test
  3. Build
  4. Deploy

- Github Pages

  github提供的免费的静态站点托管平台

## 集成的插件

### vite插件

- vite-plugin-dts

  根据tsconfig.json配置文件自动生成类型声明文件

- shelljs

  以函数调用的形式执行shell，如删除文件或者目录：`shell.rm('-rf',文件目录)`

- vite-plugin-compression2

  压缩打包后的css文件

### vitepress插件

- @vitepress-demo-preview

  用于在SSG页面中展示组件实际效果

  **安装：**

  ```sh 
  pnpm add @vitepress-demo-preview/component @vitepress-demo-preview/plugin -D
  ```

  **使用：**

  在md文件中使用

  ```md
  # Button 按钮
  
  常用的操作按钮。
  
  ## 基础用法
  
  使用 `type`、`plain`、 `round`和 `circle`来定义按钮的样式。
  
  ::: preview
  demo-preview=../demo/button/Basic.vue
  :::
  ```

- @shikijs/transformers

  用于配置常用的`transformers`转换器

- @shikijs/vitepress-twoslash

  用于在代码块中显示变量的类型注释

- 

### script脚本编写插件

- move-file-cli

  移动文件

- npm-run-all

  串行或者并行执行脚本

- release-it

  发布npm包时自动管理版本迭代