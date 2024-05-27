import { describe, it, test, expect, vi } from 'vitest'
// 这个是vue的测试框架
import { mount } from '@vue/test-utils'

import Button from './Button.vue'
import ButtonGroup from './ButtonGroup.vue'
import Icon from '../Icon/Icon.vue'
import type { ButtonType, ButtonSize } from './types'

// 测试Button组件
describe('Button.vue', () => {
  // 1.基础组件
  test('basic button', async () => {
    const onClick = vi.fn()
    // 挂载容器
    const wrapper = mount(() => (
      <Button type="primary" {...{ onClick }}>
        basic button
      </Button>
    ))

    // class
    expect(wrapper.classes()).toContain('lf-button--primary')

    // slot
    expect(wrapper.get('button').text()).toBe('basic button')

    // events
    await wrapper.get('button').trigger('click')
    // expect(onClick).toHaveBeenCalledOnce()
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  // 2.禁用组件
  test('disabled button', async () => {
    const onClick = vi.fn()
    const wrapper = mount(() => (
      <Button disabled {...{ onClick }}>
        disabled button
      </Button>
    ))

    // class
    expect(wrapper.classes()).toContain('is-disabled')

    // attrs
    expect(wrapper.attributes('disabled')).toBeDefined()
    expect(wrapper.find('button').element.disabled).toBeTruthy()

    // events
    await wrapper.get('button').trigger('click')
    expect(onClick).toHaveBeenCalledTimes(0)
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  // 3.加载组件
  test('loading button', async () => {
    const onClick = vi.fn()
    const wrapper = mount(Button, {
      props: {
        loading: true
      },
      slots: {
        default: 'loading button'
      },
      // 使用global的stubs来注入LfIcon组件，要使用global选项，需要在vitest.config.ts中配置
      global: {
        stubs: ['LfIcon']
      }
    })

    // class
    expect(wrapper.classes()).toContain('is-loading')

    // attrs
    expect(wrapper.attributes('disabled')).toBeDefined()
    expect(wrapper.find('button').element.disabled).toBeTruthy()

    // events
    await wrapper.get('button').trigger('click')
    expect(onClick).toHaveBeenCalledTimes(0)
    expect(wrapper.emitted()).not.toHaveProperty('click')

    // icon
    // 获取icon组件
    const iconWrapper = wrapper.findComponent(Icon)
    // 判断icon组件是否存在
    expect(iconWrapper.exists()).toBeTruthy()
    // 判断icon组件的icon属性值是否为Button传递的spinner
    expect(iconWrapper.attributes('icon')).toBe('spinner')
  })

  // 4.设置按钮图标
  test('icon button', async () => {
    const wrapper = mount(Button, {
      props: {
        icon: 'search'
      },
      slots: {
        default: 'icon button'
      },
      global: {
        stubs: ['LfIcon']
      }
    })

    // icon
    // 获取icon组件
    const iconWrapper = wrapper.findComponent(Icon)
    // 判断icon组件是否存在
    expect(iconWrapper.exists()).toBeTruthy()
    // 判断icon组件的icon属性值是否为Button传递的icon
    expect(iconWrapper.attributes('icon')).toBe('search')
  })

  // 5.自动聚焦组件（按enter触发点击事件）
  test('autofocus button', async () => {
    const onClick = vi.fn()
    const wrapper = mount(() => (
      <Button {...{ onClick }} autofocus>
        自动聚焦组件
      </Button>
    ))

    // attrs
    expect(wrapper.attributes('autofocus')).toBeDefined()
    expect(wrapper.find('button').element.autofocus).toBeTruthy()

    // events
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  // Props: tag
  it('should renders the custom tag when tag prop is set', () => {
    const wrapper = mount(Button, {
      props: { tag: 'a' }
    })
    expect(wrapper.element.tagName.toLowerCase()).toBe('a')
  })

  // Props: type
  it('should has the correct type class when type prop is set', () => {
    const types: ButtonType[] = ['primary', 'success', 'warning', 'danger', 'info']
    types.forEach((type) => {
      const wrapper = mount(Button, {
        props: { type }
      })
      expect(wrapper.classes()).toContain(`lf-button--${type}`)
    })
  })

  // Props: size
  it('should has the correct size class when size prop is set', () => {
    const sizes: ButtonSize[] = ['large', 'default', 'small']
    sizes.forEach((size) => {
      const wrapper = mount(Button, {
        props: { size }
      })
      expect(wrapper.classes()).toContain(`lf-button--${size}`)
    })
  })

  // Props: native-type
  it('should has the correct native type attribute when native-type prop is set', () => {
    const wrapper = mount(Button, {
      props: { nativeType: 'submit' }
    })
    expect(wrapper.element.tagName).toBe('BUTTON')
    expect((wrapper.element as HTMLButtonElement).type).toBe('submit')
  })

  // Props: plain,round,circle,disabled,loading
  it.each([
    ['plain', 'is-plain'],
    ['round', 'is-round'],
    ['circle', 'is-circle'],
    ['disabled', 'is-disabled'],
    ['loading', 'is-loading']
  ])('should has the correct class when %s prop is set', (prop, className) => {
    const wrapper = mount(Button, {
      props: { [prop]: true },
      global: {
        stubs: ['LfIcon']
      }
    })
    expect(wrapper.classes()).toContain(className)
  })

  // Events: click
  it('should emits a click event when the button is clicked', async () => {
    const wrapper = mount(Button, {})
    await wrapper.trigger('click')
    expect(wrapper.emitted().click).toHaveLength(1)
  })

  // Events: click with and without throttle
  it.each([
    ['withoutThrottle', false],
    ['withThrottle', true]
  ])('emits click event %s prop', async (_, useThrottle) => {
    const clickSpy = vi.fn()
    const wrapper = mount(() => (
      <Button
        onClick={clickSpy}
        {...{
          useThrottle,
          throttleDuration: 400
        }}
      />
    ))

    await wrapper.get('button').trigger('click')
    expect(clickSpy).toHaveBeenCalled()
  })
})

// 测试ButtonGroup组件
describe('ButtonGroup.vue', () => {
  // 1.基础按钮组
  test('basic button group', async () => {
    const wrapper = mount(() => (
      <ButtonGroup>
        <Button>button 1</Button>
        <Button>button 2</Button>
      </ButtonGroup>
    ))

    expect(wrapper.classes()).toContain('lf-button-group')
  })

  // 2.测试Props:size
  test('button group size', () => {
    const sizes: ButtonSize[] = ['large', 'default', 'small']
    sizes.forEach((size) => {
      const wrapper = mount(() => (
        <ButtonGroup size={size}>
          <Button>button 1</Button>
          <Button>button 2</Button>
        </ButtonGroup>
      ))

      // button
      const buttonWrapper = wrapper.findAllComponents(Button)
      // class
      expect(buttonWrapper.at(0)!.classes()).toContain(`lf-button--${size}`)
    })
    // 1 Props: type,size,disabled
  })

  // 3.测试Props:type
  test('button group type', () => {
    const types: ButtonType[] = ['primary', 'success', 'warning', 'danger', 'info']
    types.forEach((type) => {
      const wrapper = mount(() => (
        <ButtonGroup type={type}>
          <Button>button 1</Button>
          <Button>button 2</Button>
        </ButtonGroup>
      ))

      // button
      const buttonWrapper = wrapper.findAllComponents(Button)
      // class
      expect(buttonWrapper.at(0)!.classes()).toContain(`lf-button--${type}`)
    })
  })

  // 4.测试Props:disabled
  test('button group disabled', async () => {
    const onClick = vi.fn()
    const wrapper = mount(() => (
      <ButtonGroup disabled>
        <Button {...{ onClick }}>button 1</Button>
        <Button>button 2</Button>
      </ButtonGroup>
    ))

    // button
    const buttonWrapper = wrapper.findAllComponents(Button)

    // class
    expect(buttonWrapper.at(0)!.classes()).toContain('is-disabled')

    // attrs
    expect(buttonWrapper.at(0)!.attributes('disabled')).toBeDefined()
    // button组件内的原生button DOM
    expect(buttonWrapper.at(0)!.find('button').element.disabled).toBeTruthy()

    // event
    await buttonWrapper.at(0)!.trigger('click')
    expect(onClick).not.toBeCalled()
  })
})
