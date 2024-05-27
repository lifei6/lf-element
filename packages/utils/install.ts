import type { App, Plugin } from 'vue'
import { each } from 'lodash-es'

// 组件带有intsall方法（可被视为插件安装）后的类型
type SFCWithInstall<T> = T & Plugin

/**
 * 使整个lf-elemnet项目作为一个插件（本质就是一个install函数）
 * @param components 组件列表
 * @returns 插件安装函数
 */
export const makeInstaller = (components: Plugin[]): Plugin => {
  const installer = (app: App) => each(components, (cpn) => app.use(cpn))
  return installer
}

/**
 * 使组件具有插件安装功能
 * @param component 组件实例
 * @returns 带有intstall方法的组件实例(可被视为插件)
 */
export const withInstall = <T>(component: T): SFCWithInstall<T> => {
  ;(component as SFCWithInstall<T>).install = (app: App) => {
    // 全局安装组件
    const componentName = (component as any).name
    app.component(componentName, component as SFCWithInstall<T>)
  }
  return component as SFCWithInstall<T>
}
