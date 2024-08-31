import { describe, test, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Input from "./index.vue";

describe("components/common/filters/search", () => {
  test("renders correctly", () => {
    const handleInput = vi.fn();

    const wrapper = mount(Input, {
        props: { oninput: handleInput },
    });

    // expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.html()).toContain('placeholder="Pesquisar..."');

    const inputElement = wrapper.find("input");
    inputElement.element.value = "Test";
    inputElement.trigger("input");
    
    expect(handleInput).toHaveBeenCalled();
    expect(inputElement.element.value).toBe("Test");
  });
});