---
outline: deep
title: 测试
description: md文档编写
---

# Runtime API Examples

## 测试link

<!-- <script setup>
  import { codeToHtml } from 'shiki'

const code = `
const x = 10
console.log(x)
`.trim()

const html = await codeToHtml(code, {
  theme: 'vitesse-light',
  lang: 'ts',
  decorations: [
    {
      // line 和 character 都是从 0 开始索引的
      start: { line: 1, character: 0 },
      end: { line: 1, character: 11 },
      properties: { class: 'highlighted-word' }
    }
  ]
})

</script>

{{ html }} -->

[测试link去introduction](/introduction)

## 测试转换器transformer

### diff行高亮

```ts:line-numbers
const a = '123'
const b = '123'
const c = a + b
console.log(c) // [!code ++]
console.log(a + b) // [!code --]
```

### 高亮行

```ts
const a = '123'
const b = '123'
const c = a + b
console.log(c) // [!code highlight]
console.log(a + b)
```

### 聚焦行

```ts
const a = '123'
const b = '123'
const c = a + b
console.log(c) // [!code focus]
console.log(a + b)
```

### 代码块元字符串高亮行

```ts {1,3-4}
const a = '123'
const b = '123'
const c = a + b
console.log(c)
console.log(a + b)
```

## md编写方式

This page demonstrates usage of some of the runtime APIs provided by VitePress.

The main `useData()` API can be used to access site, theme, and page data for the current page. It works in both `.md` and `.vue` files:

```vue twoslash
<script setup lang="ts">
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()

interface Obj {
  name:string,
  age:number,
  sayName(name:string):void
}
const obj:Obj = {
  name: 'VitePress',
  age: 1,
  sayName(name) {
    console.log(name)
  }
}

obj.sayName('Hello')
</script>

## Results

### Theme Data

<pre>{{ theme }}</pre>

### Page Data

<pre>{{ page }}</pre>

### Page Frontmatter

<pre>{{ frontmatter }}</pre>

## More

</script>

## Results

### Theme Data

<pre>{{ theme }}</pre>

### Page Data

<pre>{{ page }}</pre>

### Page Frontmatter

<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()

</script>

## Results

### Theme Data

<pre>{{ theme }}</pre>

### Page Data

<pre>{{ page }}</pre>

### Page Frontmatter

<pre>{{ frontmatter }}</pre>

## More

Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).
