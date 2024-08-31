import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Status from "./index.vue";

describe("components/common/status", () => {
  test("renders correctly", () => {
    const wrapper = mount(Status, {
        props: {
          name: "Operando",
          color: "#00FF00",
        },
    });
    
    expect(wrapper.html()).toContain("Operando");
    expect(wrapper.html()).toContain("#00FF00");
  });
});