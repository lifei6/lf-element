import Button from './Button.vue'
import ButtonGroup from './ButtonGroup.vue'
import { withInstall } from '@lf-element/utils'

// 使组件进行插件化
export const LfButton = withInstall(Button)
export const LfButtonGroup = withInstall(ButtonGroup)

// 导出所有类型
export * from './types'
