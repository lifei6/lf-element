/** @type { import('@storybook/vue3').Preview } */
// 引入打包后的样式
import 'lf-element/dist/index.css'
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
