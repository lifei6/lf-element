import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'WrapperCpn',
  setup() {
    const activeNames = ref(['a'])
    return () => {
      return (
        <LfCollapse
          modelValue={activeNames.value}
          onUpdate:modelValue={(newValue) => {
            activeNames.value = newValue
          }}
          onChange={(newValue) => {
            console.log('onChange:', newValue)
          }}
          style={{ width: '300px' }}
        >
          <LfCollapseItem name="a" title="title a">
            content a
          </LfCollapseItem>
          <LfCollapseItem name="b" title="title b">
            content b
          </LfCollapseItem>
          <LfCollapseItem name="c" title="title c" disabled>
            content c
          </LfCollapseItem>
        </LfCollapse>
      )
    }
  }
})
