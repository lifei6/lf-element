import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// 压缩插件
import { compression } from 'vite-plugin-compression2'
// 移动样式插件
import moveStyleFilePlugin from './custom-vite-plugins/move-style-file-plugin'
import { readFileSync } from 'fs'
import { delay } from 'lodash-es'
import shell from 'shelljs'

const TRY_MOVE_STYLES_DELAY = 800 as const

function moveStyles() {
  try {
    readFileSync('./dist/umd/index.css.gz')
    shell.cp('./dist/umd/index.css', './dist/index.css')
  } catch (_) {
    delay(moveStyles, TRY_MOVE_STYLES_DELAY)
  }
}

export default defineConfig({
  plugins: [
    vue(),
    compression({
      include: /.(cjs|css)$/i
    }),
    moveStyleFilePlugin({
      // 重新构建前删除上个版本生产的文件
      rmFiles: ['./dist/umd', './dist/index.css'],
      // 构建后移动样式文件
      afterBuild: moveStyles
    })
  ],
  build: {
    outDir: 'dist/umd',
    lib: {
      entry: resolve(__dirname, './index.ts'),
      name: 'LfElement',
      fileName: 'index',
      formats: ['umd']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue'
        },
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'style.css') {
            return 'index.css'
          }
          return chunkInfo.name as string
        }
      }
    }
  }
})
