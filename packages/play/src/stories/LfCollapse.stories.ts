import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3'
import { fn } from '@storybook/test'
import { LfCollapse, LfCollapseItem, LfIcon } from 'lf-element'
// 引入样式
import 'lf-element/dist/theme/Collapse.css'
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
// 渲染容器
const container = (cpn: string) => {
  return `<div style="margin-top:5px;">
  ${cpn}
  </div>`
}

const meta = {
  title: 'Example/LfCollapse',
  component: LfCollapse,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    accordion: {
      control: 'boolean'
    }
  },
  args: {
    'onUpdate:modelValue': fn(),
    onChange: fn()
  }
} satisfies Meta<typeof LfCollapse>

export default meta
type Story = StoryObj<typeof meta> & { argTypes?: ArgTypes }

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
// 非手风琴模式
export const Default: Story = {
  args: {
    accordion: false,
    modelValue: ['1'],
    'onUpdate:modelValue': fn()
  },
  render: (args) => ({
    components: { LfCollapse, LfCollapseItem, LfIcon },
    setup() {
      return { args }
    },
    template: container(`<lf-collapse v-bind='args'>
    <lf-collapse-item title="标题1" name="1">标题一的内容</lf-collapse-item>
    <lf-collapse-item title="标题2" name="2">标题二的内容</lf-collapse-item>
    <lf-collapse-item title="标题3" name="3">标题三的内容</lf-collapse-item>
   </lf-collapse>`)
  })
}
// 手风琴模式
export const Accordion: Story = {
  args: {
    accordion: true,
    modelValue: []
  },
  render: (args) => ({
    components: { LfCollapse, LfCollapseItem, LfIcon },
    setup() {
      return { args }
    },
    template: container(`<lf-collapse v-bind='args'>
    <lf-collapse-item title="标题1" name="1">标题一的内容</lf-collapse-item>
    <lf-collapse-item title="标题2" name="2">标题二的内容</lf-collapse-item>
    <lf-collapse-item title="标题3" name="3">标题三的内容</lf-collapse-item>
   </lf-collapse>`)
  })
}
