// lf-element插件的出口，app.use执行这里导出的install方法
import { makeInstaller } from '@lf-element/utils'
import components from './components'
// 导入样式(为了打包)
import '@lf-element/theme/index.less'
// 导入字体图标库
import { library } from '@fortawesome/fontawesome-svg-core'
// 导入字体图标中的所有图标
import { fas } from '@fortawesome/free-solid-svg-icons'

// 将字体图标添加到图标库中
// 向 library 添加一个元素 fas
library.add(fas)

// 获取插件安装函数
const install = makeInstaller(components)

// 分别导出组件
export * from '../components'
// 导出安装函数
export default install
