import { describe, test, expect, beforeEach, vi } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import { createTestingPinia, type TestingPinia } from "@pinia/testing";
import { mockData } from "@/tests/__mock__/equipaments.js"
import Equipaments from "./index.vue";

describe("components/aside/equipaments", () => {
  let pinia:TestingPinia;
  beforeEach(() => {
    pinia = createTestingPinia({
      createSpy: vi.fn(),
    });
    const equipamentStore = useEquipamentsStore();
    equipamentStore.list = mockData;
  });
  
  test("renders correctly", async () => {
    const wrapper = await mountSuspended(Equipaments, {
      global: { plugins: [pinia] },
    });
    
    const equipaments = wrapper.findAll(".equipaments >*");

    const equipament1 = equipaments[0].text();
    const equipament2 = equipaments[1].text();
    
    expect(equipament1).toContain("CA-0001");
    expect(equipament1).toContain("Caminhão de carga");
    expect(equipament1).toContain("Parado");
    expect(equipament1).toContain("2/1/2021, 4:00:00 AM");

    expect(equipament2).toContain("CA-0002");
    expect(equipament2).toContain("Caminhão de carga");
    expect(equipament2).toContain("Manutenção");
    expect(equipament2).toContain("2/2/2021, 4:00:00 AM");
  });
});