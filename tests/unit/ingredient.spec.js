import { mount } from '@vue/test-utils'
import Ingredient from '@/components/Ingredient.vue'

describe('BigCard', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Ingredient)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
