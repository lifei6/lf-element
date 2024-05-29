// 使所有组件以数组形式导出
import { LfButton, LfButtonGroup, LfIcon, LfCollapseItem, LfCollapse } from '@lf-element/components'
import type { Plugin } from 'vue'

const components: Plugin[] = [LfButton, LfButtonGroup, LfIcon, LfCollapseItem, LfCollapse]

export default components
