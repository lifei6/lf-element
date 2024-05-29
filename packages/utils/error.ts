import { isString } from 'lodash-es'

// 对错误对象进行包装
class LfUIError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'LfUIError'
  }
}

/**
 * 错误发射器
 * @param scope {string}:组件名
 * @param msg {string}:错误信息
 */
export function throwError(scope: string, msg: string) {
  throw new LfUIError(`[${scope}] ${msg}`)
}

// 错误处理器
export function debugWarn(error: Error): void
export function debugWarn(scope: string, msg: string): void
export function debugWarn(scope: string | Error, msg?: string) {
  if (process.env.NODE_ENV !== 'production') {
    const err = isString(scope) ? new LfUIError(`[${scope}] ${msg}`) : scope
    console.warn(err)
  }
}
