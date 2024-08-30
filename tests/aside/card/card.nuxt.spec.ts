import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import Card from "@/components/aside/card/index.vue";
import { onMouseEnter, onMouseLeave } from '@/components/aside/card/useCard';

describe('components/aside/card', () => {
  it('should render', async () => {
    const children = "<h1>Test</h1>";
    const wrapper = mount(Card, { 
      props: { mark_id: "123" },
      slots: { default: children }
    });

    expect(wrapper.exists()).toEqual(true);
    expect(wrapper.props().mark_id).toEqual("123");
    expect(wrapper.html()).toContain('<h1>Test</h1>');
  });

  it('should emit mouse events', async () => {
    const wrapper = mount(Card, { 
      props: { mark_id: "123" },
      slots: { default: "<h1>Test</h1>" }
    });

    vi.mock('@/components/aside/card/useCard', () => ({
      onMouseEnter: vi.fn(),
      onMouseLeave: vi.fn()
    }));
    
    await wrapper.trigger('mouseenter');
    expect(wrapper.emitted().mouseenter).toBeTruthy();
    expect(onMouseEnter).toHaveBeenCalled();

    await wrapper.trigger('mouseleave');
    expect(wrapper.emitted().mouseleave).toBeTruthy();
    expect(onMouseLeave).toHaveBeenCalled();
  });
});