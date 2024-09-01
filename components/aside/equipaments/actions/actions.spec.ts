import { describe, test, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import { mockEquipamentsData } from "@/tests/__mock__/equipaments.js"
import Actions from "./index.vue";

describe("components/aside/equipaments/actions", () => {
  test("renders correctly", async () => {
    const wrapper = await mountSuspended(Actions, {
      props: {
        equipament_id: mockEquipamentsData[0].id,
        vehicle_id: mockEquipamentsData[0].vehicle.id,
      }
    });
    
    const equipamentUrl = 'href="/equipamento/a7c53eb1-4f5e-4eba-9764-ad205d0891f9"';

    expect(wrapper.html()).toContain(equipamentUrl);
  });
});