import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Header from "./index.vue";
import { mockData } from "@/tests/__mock__/equipament.js"

describe("components/aside/equipament/header", () => {
  test("renders correctly", () => {
    const wrapper = mount(Header, { props: { ...mockData } });

    const equipament = "Equipamento: CA-0001";
    const status = "Manutenção, 2/1/2021, 12:00:00 AM";
    const vehicle = "Veículo: Caminhão de carga";
    const productivity = "Produtividade geral: 0%";
    const profit = "Lucro: R$ 0 | Custo: R$ -20";

    // expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.text()).toContain(equipament);
    expect(wrapper.text()).toContain(status);
    expect(wrapper.text()).toContain(vehicle);
    expect(wrapper.text()).toContain(productivity);
    expect(wrapper.text()).toContain(profit);
  });
});