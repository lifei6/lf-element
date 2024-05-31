/** @type { import('@storybook/vue3').Preview } */
// 引入打包后的全局样式
import 'lf-element/dist/theme/index.css'
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
