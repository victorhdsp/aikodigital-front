import { describe, test, expect, beforeEach, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { createTestingPinia, type TestingPinia } from "@pinia/testing";
import { mockEquipamentData } from "@/tests/__mock__/equipament.js"
import Equipament from "./index.vue";
import { mockStateData } from "~/tests/__mock__/states";

describe("components/aside/equipament", () => {
  let pinia:TestingPinia;
  beforeEach(() => {
    pinia = createTestingPinia({
      createSpy: vi.fn(),
    });
    const equipamentStore = useEquipamentStore();
    equipamentStore.item = mockEquipamentData;

    const { ui } = useApplicationStore();
    ui.states = mockStateData;
  });
  
  test("renders correctly", async () => {
    const wrapper = mount(Equipament, {
      global: { plugins: [pinia] },
    });

    const header = wrapper.find(".header");
    const history = wrapper.find(".history");
    
    // expect(wrapper.html()).toMatchSnapshot();
    
    expect(header.exists()).toBe(true);
    expect(history.exists()).toBe(true);
  });
});