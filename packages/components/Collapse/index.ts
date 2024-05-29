import { withInstall } from '@lf-element/utils'
import Collapse from './Collapse.vue'
import CollapseItem from './CollapseItem.vue'

export * from './types'

export const LfCollapse = withInstall(Collapse)
export const LfCollapseItem = withInstall(CollapseItem)
