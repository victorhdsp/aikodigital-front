import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import EquipamentContent from "./index.vue";
import { mockData } from "../mockData";

describe("components/aside/equipament/history", () => {
  it("should render", async () => {
    const wrapper = mount(EquipamentContent, {
      props: { ...mockData[0] },
    });

    expect(wrapper.exists()).toEqual(true);
    expect(wrapper.html()).toContain("CA-0001");
    expect(wrapper.html()).toContain("Caminhão de carga");
    expect(wrapper.html()).toContain("2/1/2021, 4:00:00 AM");
    expect(wrapper.html()).toContain("#f1c40f");
  });
});