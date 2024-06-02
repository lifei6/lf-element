import { createApp } from 'vue'
import App from './App.vue'
// 导入lf-element插件
import LfElement from 'lf-element'
// 导入lf-element全部样式
import 'lf-element/dist/index.css'
// 导入lf-element按需引入的全局样式
// import 'lf-element/dist/theme/index.css'
// 使用unocss
import 'virtual:uno.css'

const app = createApp(App)
// 使用lf-element插件
app.use(LfElement)
app.mount('#app')
