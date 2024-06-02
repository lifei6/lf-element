// uno.config.ts
import { defineConfig, presetUno, presetWind } from 'unocss'
export default defineConfig({
  presets: [
    presetUno(),
    presetWind()
    // 你可以在这里添加其他的 preset
  ],
  rules: [
    // 1. m-->margin
    [
      /^m-([\d]+(\.\d+)?)$/,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ([_, num]) => {
        // console.log('匹配的类名', _)
        // console.log('匹配类名里面的num:', num)
        return { margin: `${num}px` }
      }
    ]
  ],
  shortcuts: {
    'wh-full': 'w-full h-full'
  }
})
