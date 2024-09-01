import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Header from "./index.vue";
import { mockEquipamentData } from "@/tests/__mock__/equipament.js"

describe("components/aside/equipament/header", () => {
  test("renders correctly", () => {
    const wrapper = mount(Header, { props: { ...mockEquipamentData } });

    const equipament = "CA-0001";
    const vehicle = "Caminhão de carga";
    const productivity = "Produtividade: 50%";
    const profit = "Lucro: R$ 160,00";

    // expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.text()).toContain(equipament);
    expect(wrapper.text()).toContain(vehicle);
    expect(wrapper.text()).toContain(productivity);
    expect(wrapper.text()).toContain(profit);
  });
});