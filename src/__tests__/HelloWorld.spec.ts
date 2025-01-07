import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../components/HelloWorld.vue'

describe('HelloWorld - Component', () => {
  it('renders properly and displays the correct message', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
    expect(wrapper.text()).toContain('Cristian')
    expect(wrapper.isVisible()).toBe(true)
  })
})
