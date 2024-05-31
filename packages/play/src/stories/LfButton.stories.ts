import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3'
import { fn } from '@storybook/test'
import { LfButton, LfButtonGroup, LfIcon } from 'lf-element'
// 引入样式
import 'lf-element/dist/theme/Button.css'
import 'lf-element/dist/theme/Icon.css'
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/LfButton',
  component: LfButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'danger', 'info', '']
    },
    size: {
      control: { type: 'select' },
      options: ['large', 'default', 'small', '']
    },
    disabled: {
      control: 'boolean'
    },
    loading: {
      control: 'boolean'
    },
    useThrottle: {
      control: 'boolean'
    },
    throttleDuration: {
      control: 'number'
    },
    autofocus: {
      control: 'boolean'
    },
    tag: {
      control: { type: 'select' },
      options: ['button', 'a', 'div']
    },
    nativeType: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset', '']
    },
    icon: {
      control: { type: 'text' }
    },
    loadingIcon: {
      control: { type: 'text' }
    }
  },
  args: {
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    onClick: fn()
  }
} satisfies Meta<typeof LfButton>

export default meta
type Story = StoryObj<typeof meta> & { argTypes?: ArgTypes }

// 渲染容器
const container = (cpn: string) => {
  return `<div style="margin-top:5px;">
  ${cpn}
  </div>`
}
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
// 主要按钮
export const Primary: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: { type: 'text' }
    }
  },
  args: {
    content: '主要按钮',
    type: 'primary'
  },
  render: (args) => ({
    components: { LfButton },
    setup() {
      return { args }
    },
    template: container(`<lf-button v-bind="args">{{args.content}}</lf-button>`)
  })
}

// 成功按钮
export const Success: Story & { args: { content: string } } = {
  args: {
    content: '成功按钮',
    type: 'success'
  },
  render: (args) => ({
    components: { LfButton },
    setup() {
      return { args }
    },
    template: container(`<lf-button v-bind="args">Success</lf-button>`)
  })
}

// 图标按钮
export const IconButton: Story & { args: { content: string } } = {
  args: {
    icon: 'search',
    type: 'primary',
    content: 'IconButton'
  },
  render: (args) => ({
    components: { LfButton, LfIcon },
    setup() {
      return { args }
    },
    template: container(`<lf-button v-bind="args">{{args.content}}</lf-button>`)
  })
}

// 按钮组
export const ButtonGroup: Story & { args: { content1: string; content2: string } } = {
  argTypes: {
    groupType: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'danger', 'info', '']
    },
    groupSize: {
      control: { type: 'select' },
      options: ['large', 'default', 'small', '']
    },
    groupDisabled: {
      control: 'boolean'
    },
    content1: {
      control: { type: 'text' },
      defaultValue: 'Button1'
    },
    content2: {
      control: { type: 'text' },
      defaultValue: 'Button2'
    }
  },
  args: {
    round: true,
    content1: 'Button1',
    content2: 'Button2'
  },
  render: (args) => ({
    components: { LfButton, LfButtonGroup },
    setup() {
      return { args }
    },
    template:
      container(`<lf-button-group :type='args.groupType' :size='args.groupSize' :disabled='args.groupDisabled'>
      <lf-button v-bind='args'>{{args.content1}}</lf-button>
      <lf-button v-bind='args'>{{args.content2}}</lf-button>
    </lf-button-group>`)
  })
}
