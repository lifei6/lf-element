// 导入LfElement组件库及样式
import LfElement from 'lf-element'
import 'lf-element/dist/index.css'
// !!!!先导入自己的样式，不然自己的全局变量会覆盖其他主题的样式
// import './custom.css'
// .vitepress/theme/index.ts
import theme from 'vitepress/theme'
import type { EnhanceAppContext } from 'vitepress'
// 导入鼠标悬停显示TS类型的插件
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import '@shikijs/vitepress-twoslash/style.css'
// 显示组件demo的插件
import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'

export default {
  ...theme,
  enhanceApp({ app }: EnhanceAppContext) {
    // 注册鼠标悬停显示TS类型的插件
    app.use(TwoslashFloatingVue as any)
    // 注册自己的组件库
    app.use(LfElement)
    // 注册展示组件的插件
    app.component('demo-preview', ElementPlusContainer)
  }
}
