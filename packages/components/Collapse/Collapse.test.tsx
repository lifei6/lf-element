import { beforeAll, describe, expect, test, vi, it } from 'vitest'
import { mount } from '@vue/test-utils'
import type { DOMWrapper, VueWrapper } from '@vue/test-utils'
import { ref } from 'vue'
import Collapse from './Collapse.vue'
import CollapseItem from './CollapseItem.vue'

const onChange = vi.fn()

// const actionsData = {
//   onChange: (newValue: string[] | number[]) => {
//     console.log(newValue)
//   }
// }
// const onChange = vi.spyOn(actionsData, 'onChange')

let wrapper: VueWrapper, headers: DOMWrapper<Element>[], contents: DOMWrapper<Element>[]

let firstHeader: DOMWrapper<Element>,
  secondHeader: DOMWrapper<Element>,
  disabledHeader: DOMWrapper<Element>,
  firstContent: DOMWrapper<Element>,
  secondContent: DOMWrapper<Element>,
  disabledContent: DOMWrapper<Element>

describe('Collapse.vue', () => {
  const inputValue = ref(['a'])
  beforeAll(() => {
    wrapper = mount(
      () => {
        return (
          <Collapse vModel={inputValue.value} {...{ onChange }}>
            <CollapseItem name="a" title="title a">
              content a
            </CollapseItem>
            <CollapseItem name="b" title="title b">
              content b
            </CollapseItem>
            <CollapseItem name="c" title="title c" disabled>
              content c
            </CollapseItem>
          </Collapse>
        )
      },
      {
        global: {
          stubs: ['LfIcon']
        },
        attachTo: document.body // 最新版本 jsdom 更新缓存 bug
      }
    )

    headers = wrapper.findAll('.lf-collapse-item__header')
    contents = wrapper.findAll('.lf-collapse-item__wapper')

    firstHeader = headers[0]
    secondHeader = headers[1]
    disabledHeader = headers[2]

    firstContent = contents[0]
    secondContent = contents[1]
    disabledContent = contents[2]
  })

  test('测试基础结构以及对应文本', () => {
    // lenght
    expect(headers.length).toBe(3)
    expect(contents.length).toBe(3)

    // title
    expect(firstHeader.text()).toBe('title a')

    // content
    expect(firstHeader.classes()).toContain('is-active')
    expect(firstContent.isVisible()).toBeTruthy()
    expect(secondHeader.classes()).not.toContain('is-active')
    expect(secondContent.isVisible()).toBeFalsy()
    expect(firstContent.text()).toBe('content a')
    expect(secondContent.text()).toBe('content b')
  })

  test('点击标题展开/关闭内容', async () => {
    // events
    await firstHeader.trigger('click')
    expect(firstHeader.classes()).not.toContain('is-active')
    expect(firstContent.isVisible()).toBeFalsy()
    expect(inputValue.value).toEqual([])
    expect(onChange).toHaveBeenCalledWith([])
    await secondHeader.trigger('click')
    expect(secondHeader.classes()).toContain('is-active')
    expect(secondHeader.isVisible()).toBeTruthy()
    expect(inputValue.value).toEqual(['b'])
    expect(onChange).toHaveBeenCalledWith(['b'])
  })

  test('disabled 内容', async () => {
    // disabled
    expect(disabledHeader.classes()).toContain('is-disabled')
    // onChange触发次数清零
    onChange.mockClear()
    await disabledHeader.trigger('click')
    expect(disabledContent.isVisible()).toBeFalsy()
    expect(onChange).not.toHaveBeenCalled()
  })

  test('手风琴模式', async () => {
    const activeNames = ref(['a'])
    wrapper = mount(() => (
      <Collapse vModel={activeNames.value} {...{ onChange }} accordion>
        <CollapseItem name="a" title="title a">
          content a
        </CollapseItem>
        <CollapseItem name="b" title="title b">
          content b
        </CollapseItem>
        <CollapseItem name="c" title="title c" disabled>
          content c
        </CollapseItem>
      </Collapse>
    ))
    headers = wrapper.findAll('.lf-collapse-item__header')
    contents = wrapper.findAll('.lf-collapse-item__wapper')

    firstHeader = headers[0]
    secondHeader = headers[1]
    disabledHeader = headers[2]

    firstContent = contents[0]
    secondContent = contents[1]
    disabledContent = contents[2]

    // onChange触发次数清零
    onChange.mockClear()
    await secondHeader.trigger('click')
    expect(secondHeader.classes()).toContain('is-active')
    expect(secondContent.isVisible()).toBeTruthy()
    expect(activeNames.value).toEqual(['b'])
    expect(onChange).toHaveBeenCalledWith(['b'])

    // 点击自己两次数据为['']
    await secondHeader.trigger('click')
    expect(secondHeader.classes()).not.toContain('is-active')
    expect(activeNames.value).toEqual([''])
    expect(onChange).toHaveBeenCalledWith([''])
  })

  it('手风琴模式传入数组不能长度不能超过1', () => {
    // 模拟原始的console.log函数
    const consoleWarnSpy = vi.spyOn(console, 'warn')
    const modelValue = [1, 2] // this array has a length greater than 1
    mount(Collapse, {
      props: { modelValue, accordion: true }
    })

    // 检查console.warn是否被调用
    expect(consoleWarnSpy).toHaveBeenCalled()

    // Clean up the spy
    consoleWarnSpy.mockRestore()
  })
})
