import { describe, test, expect, beforeEach, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Status from "./index.vue";
import { createTestingPinia, type TestingPinia } from "@pinia/testing";
import { mockStateData } from "~/tests/__mock__/states";

describe("components/common/status", () => {
  let pinia:TestingPinia;
  beforeEach(() => {
    pinia = createTestingPinia({
      createSpy: vi.fn(),
    });
    const applicationStore = useApplicationStore();
    applicationStore.ui.states = mockStateData;
  });
  
  test("renders correctly", () => {
    const wrapper = mount(Status, {
        props: { id: "0808344c-454b-4c36-89e8-d7687e692d57" },
        global: { plugins: [pinia] },
    });
    
    expect(wrapper.html()).toContain("Operando");
    expect(wrapper.html()).toContain("#2ecc71");
  });
});