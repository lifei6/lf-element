// @lf-element/utils的出口
// 统一暴露utils的接口
export * from './install'
export * from './error'

// 给icon取别名
export const typeIconMap = new Map([
  ['info', 'circle-info'],
  ['success', 'check-circle'],
  ['warning', 'circle-exclamation'],
  ['danger', 'circle-xmark'],
  ['error', 'circle-xmark']
])
