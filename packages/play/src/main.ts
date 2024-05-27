import { createApp } from 'vue'
import App from './App.vue'
// 导入lf-element插件
import LfElement from 'lf-element'
// 导入lf-element样式
import '@lf-element/theme/index.less'

const app = createApp(App)
// 使用lf-element插件
app.use(LfElement)
app.mount('#app')
