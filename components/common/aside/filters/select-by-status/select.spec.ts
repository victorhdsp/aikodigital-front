import { describe, test, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Select from "./index.vue";

describe("components/common/filters/select-by-status", () => {
  test("renders correctly", () => {
    const handleChange = vi.fn();

    const wrapper = mount(Select, {
        props: { onchange: handleChange },
    });

    // expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.html()).toContain('Status');
  });
});