import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Filters from "./index.vue";

describe("components/aside/equipament/filters", () => {
  test("renders correctly", () => {
    const wrapper = mount(Filters);

    const input = wrapper.find("input");
    const select = wrapper.find("select");
    
    // expect(wrapper.html()).toMatchSnapshot();
    expect(input.exists()).toBe(true);
    expect(select.exists()).toBe(true);
  });
});