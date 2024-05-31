import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// 生成类型声明文件的插件
import dts from 'vite-plugin-dts'
import { readdirSync } from 'fs'
import { filter, map, delay } from 'lodash-es'
import moveStyleFilePlugin from './custom-vite-plugins/move-style-file-plugin'
import shell from 'shelljs'

// 组件文件名（用于分包）
function getDirectoriesSync(basePath: string) {
  const entries = readdirSync(basePath, { withFileTypes: true })
  return map(
    filter(entries, (entry) => entry.isDirectory()),
    (entry) => entry.name
  )
}
const TRY_MOVE_STYLES_DELAY = 800 as const
// 移动样式
function moveStyles() {
  try {
    // 切记读取到theme目录才去移动，不然还没构建出来
    readdirSync('./dist/es/theme')
    shell.mv('./dist/es/theme', './dist')
  } catch (_) {
    delay(moveStyles, TRY_MOVE_STYLES_DELAY)
  }
}

export default defineConfig({
  plugins: [
    vue(),
    // 生成类型声明文件
    dts({
      tsconfigPath: '../../tsconfig.build.json',
      outDir: 'dist/types'
    }),
    moveStyleFilePlugin({
      rmFiles: ['./dist/es', './dist/theme', './dist/types'],
      afterBuild: moveStyles
    })
  ],
  build: {
    // sourcemap: true, // 生成sourcemap文件
    minify: false, // 禁用压缩和混淆变量
    cssCodeSplit: true, // 开启css代码分割
    outDir: 'dist/es', // 输出目录
    // 开启-库模式
    lib: {
      entry: resolve(__dirname, './index.ts'), // 打包入口文件
      name: 'LfElement',
      fileName: 'index', // 包文件输出名称
      formats: ['es'] // 输出包的格式（是es还是umd）
    },
    // rollup对js打包处理的配置项
    rollupOptions: {
      // 第三方库进行排除-不打包-本身在node_modules中
      external: [
        'vue',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/vue-fontawesome',
        '@popperjs/core',
        'async-validator'
      ],
      // 输出配置
      output: {
        // 静态资源文件
        // css文件换名
        assetFileNames: (chunkInfo) => {
          // console.log('chunkInfo.name', chunkInfo.name)
          // style.css换名为index.css
          if (chunkInfo.name === 'style.css') {
            return 'index.css'
          }
          // css样式分包输出的文件名
          if (chunkInfo.type === 'asset' && /\.(css)$/i.test(chunkInfo.name as string)) {
            return 'theme/[name].[ext]'
          }
          return chunkInfo.name as string
        },
        // 分包
        manualChunks(id) {
          // 第三方包单独抽离为vendor
          if (id.includes('node_modules')) {
            return 'vendor'
          }
          // hooks
          if (id.includes('/packages/hooks')) {
            return 'hooks'
          }
          // 组件
          for (const item of getDirectoriesSync('../components')) {
            if (id.includes(`/packages/components/${item}`)) {
              return item
            }
          }
          // utils
          // 后面这个目的是把_export_sfc函数的逻辑进行抽离，避免资源加载顺序问题
          // console.log('id:', id)
          if (id.includes('/packages/utils') || id.includes('plugin-vue:export-helper')) {
            return 'utils'
          }
        }
      }
    }
  }
})
