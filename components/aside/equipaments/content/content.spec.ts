import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { mockData } from "@/tests/__mock__/equipaments.js"
import Content from "./index.vue";

describe("components/aside/equipaments/content", () => {
  test("renders correctly", async () => {
    const wrapper = mount(Content, {
      props: { ...mockData[0] }
    });
    
    const equipament = "CA-0001";
    const vehicle = "Caminhão de carga";
    const status = "Parado";
    const date = "2/1/2021, 4:00:00 AM";

    expect(wrapper.text()).toContain(equipament);
    expect(wrapper.text()).toContain(vehicle);
    expect(wrapper.text()).toContain(status);
    expect(wrapper.text()).toContain(date);
  });
});