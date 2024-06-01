import { defineConfig } from 'vitepress'
// 增加鼠标悬停显示TS类型的插件
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
// 增加组件demo预览插件
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
// 增加shiki的代码高亮
import { bundledThemes } from 'shiki'
// 增加代码块转换器
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationFocus,
  transformerMetaHighlight
  // ...
} from '@shikijs/transformers'

export default defineConfig({
  title: 'Lf Element',
  description: '小李子搭建的组件库',
  base: '/lf-element/',
  appearance: true,
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // 右上角的导航
    nav: [
      { text: '文档教程', link: '/introduction' },
      { text: '组件', link: '/components/button' }
    ],
    // 是否提供搜索框
    search: {
      provider: 'local'
    },
    // 侧边栏--大纲
    sidebar: [
      {
        text: '指南',
        collapsed: false,
        items: [
          { text: '介绍', link: '/introduction' },
          { text: '快速开始', link: '/get-start' }
        ]
      },
      {
        text: '基础组件',
        collapsed: false,
        items: [
          { text: 'Button 按钮', link: 'components/button' },
          { text: 'Collapse 折叠面板', link: 'components/collapse' }
          // { text: "Dropdown 下拉菜单", link: "components/dropdown" },
        ]
      },
      {
        text: '反馈组件',
        collapsed: false
        // items: [
        //   { text: "Alert 提示", link: "components/alert" },
        //   { text: "Loading 加载", link: "components/loading" },
        //   { text: "Message 消息提示", link: "components/message" },
        //   { text: "MessageBox 消息弹出框", link: "components/messagebox" },
        //   { text: "Notification 通知", link: "components/notification" },
        //   { text: "Popconfirm 气泡确认框", link: "components/popconfirm" },
        //   { text: "Tooltip 文字提示", link: "components/tooltip" },
        // ],
      },
      {
        text: '表单组件',
        collapsed: false
        // items: [{ text: "Form 表单", link: "components/form" }],
      },
      {
        text: 'vitePress案例',
        collapsed: false,
        items: [
          { text: 'api案例', link: '/example/api-examples' },
          { text: 'markdown案例', link: '/example/markdown-examples' }
        ]
      }
    ],
    // 项目地址
    socialLinks: [{ icon: 'github', link: 'https://github.com/lf-element' }]
  },

  markdown: {
    // 1.配置主题
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    },
    async shikiSetup(shiki) {
      await shiki.loadTheme(...(Object.keys(bundledThemes) as any))
    },
    // 3.配置使用组件demo展示功能
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    },
    // 2.配置代码块应用对应的转换器
    codeTransformers: [
      // 2.1 配置使用TS类型注释
      transformerTwoslash({
        explicitTrigger: true // <--手动使用towslash才会触发
      }),
      // 2.2 配置git的diff风格
      transformerNotationDiff(),
      // 2.3 配置使用注释高亮行
      transformerNotationHighlight(),
      // 2.4 聚焦某行
      transformerNotationFocus(),
      // 2.5 通过代码块上的元字符串高亮行
      transformerMetaHighlight()
    ]
  },
  // 添加google字体
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }
    ],
    ['link', { rel: 'icon', href: '/lf-element/lf-element.jpeg' }]
  ]
})
