import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import EquipamentHistory from "./index.vue";
import { mockData } from "../mockData";

describe("components/aside/equipament/history", () => {
  it("should render", async () => {
    const wrapper = mount(EquipamentHistory, {
        props: { ...mockData },
    });

    expect(wrapper.exists()).toEqual(true);
    expect(wrapper.html()).toContain("#e74c3c");
    expect(wrapper.html()).toContain("Manutenção, 2/1/2021, 12:00:00 AM");
    expect(wrapper.html()).toContain("#f1c40f");
    expect(wrapper.html()).toContain("Parado, 2/1/2021, 4:00:00 AM");
  });
});