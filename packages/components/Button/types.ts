import type { Component, Ref, ComputedRef } from 'vue'
export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type NativeType = 'button' | 'submit' | 'reset'
export type ButtonSize = 'default' | 'large' | 'small'

// 按钮参数接口
export interface ButtonProps {
  tag?: string | Component
  type?: ButtonType
  size?: ButtonSize
  plain?: boolean
  round?: boolean
  circle?: boolean
  disabled?: boolean
  autofocus?: boolean
  nativeType?: NativeType
  icon?: string
  loading?: boolean
  loadingIcon?: string
  useThrottle?: boolean
  throttleDuration?: number
}

// 按钮事件接口
export interface ButtonEmits {
  (e: 'click', value: MouseEvent): void
}

// 按钮实例暴露的接口
export interface ButtonInstance {
  ref: Ref<HTMLButtonElement | void>
  size: ComputedRef<string>
  type: ComputedRef<string>
  disabled: ComputedRef<boolean>
}

// 按钮组参数接口
export interface ButtonGroupProps {
  size?: ButtonSize
  type?: ButtonType
  disabled?: boolean
}

// 按钮组上下文接口(Provide提供的上下文属性)
export interface ButtonGroupContext {
  size?: ButtonSize
  type?: ButtonType
  disabled?: boolean
}
