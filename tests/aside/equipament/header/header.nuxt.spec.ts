import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import EquipamentHeader from "@/components/aside/equipament/header/index.vue";
import { mockData } from "../mockData";

describe("components/aside/equipament/header", () => {
  it("should render", async () => {
    const wrapper = mount(EquipamentHeader, {
      props: { ...mockData },
    });

    expect(wrapper.exists()).toEqual(true);
    expect(wrapper.html()).toContain("CA-0001");
    expect(wrapper.html()).toContain("Caminhão de carga");
    expect(wrapper.html()).toContain("#f1c40f");
    expect(wrapper.html()).toContain("Parado");
    expect(wrapper.html()).toContain("2/1/2021, 4:00:00 AM");
  });
});