import { each, isFunction } from 'lodash-es'
import shell from 'shelljs'

interface Ioptions {
  rmFiles?: string[]
  beforeBuild?: Function
  afterBuild?: Function
}

export default function moveStyleFilePlugin({ rmFiles = [], beforeBuild, afterBuild }: Ioptions) {
  return {
    name: 'move-style-file-plugin',
    // 构建开始前hook
    buildStart() {
      // 删除文件
      each(rmFiles, (fileName) => {
        shell.rm('-rf', fileName)
      })
      // 执行构建前的回调钩子
      isFunction(beforeBuild) && beforeBuild()
    },
    // 构建结束后hook
    buildEnd(err?: Error) {
      // 执行构建后的回调钩子
      !err && isFunction(afterBuild) && afterBuild(err)
    }
  }
}
