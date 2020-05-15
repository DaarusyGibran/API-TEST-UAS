import { mount } from '@vue/test-utils'
import Kategori from '@/components/Kategori.vue'

describe('BigCard', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Kategori)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
