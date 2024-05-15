import Button from "./Button.vue";
import { withInstall } from "@lf-element/utils";

// 使组件进行插件化
export const LfButton = withInstall(Button);
