import { describe, test, expect, beforeEach, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { createTestingPinia, type TestingPinia } from "@pinia/testing";
import { mockData } from "@/tests/__mock__/stateHistory.js"
import History from "./index.vue";

describe("components/aside/equipament/history", () => {
  let pinia:TestingPinia;
  beforeEach(() => {
    pinia = createTestingPinia({
      createSpy: vi.fn(),
    });
    const equipamentStore = useEquipamentStore();
    equipamentStore.stateHistory = mockData;
  });
  
  test("renders correctly", async () => {
    const wrapper = mount(History, {
      global: { plugins: [pinia] },
    });

    // expect(wrapper.html()).toMatchSnapshot();

    const status = wrapper.findAll(".status");
    expect(status.length).toBe(2);

    const status1 = status[0];
    expect(status1.find(".icon").attributes("style")).toBe("--color: #e74c3c;");
    expect(status1.text()).toContain("Manutenção, 2021-02-01T03:00:00.000Z");

    const status2 = status[1];
    expect(status2.find(".icon").attributes("style")).toBe("--color: #f1c40f;");
    expect(status2.text()).toContain("Parado, 2021-02-01T07:00:00.000Z");
  });
});