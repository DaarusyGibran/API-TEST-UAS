import { mount } from '@vue/test-utils'
import Area from '@/components/Area.vue'

describe('BigCard', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Area)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
