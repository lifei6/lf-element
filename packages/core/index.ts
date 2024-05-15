// lf-element插件的出口，app.use执行这里导出的install方法
import { makeInstaller } from "@lf-element/utils";
import components from "./components";

// 获取插件安装函数
const install = makeInstaller(components);

// 分别导出组件
export * from "@lf-element/components";
// 导出安装函数
export default install;
