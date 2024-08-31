import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Card from "./index.vue";

describe("components/common/aside/card", () => {
  test("renders correctly", () => {
    const wrapper = mount(Card, {
        props: { mark_id: "1" },
        slots: { default: "<h1>Test</h1>" },
    });

    // expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.text()).toBe("Test");
  });
});