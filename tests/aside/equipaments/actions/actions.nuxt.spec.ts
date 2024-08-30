import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import EquipamentActions from "@/components/aside/equipaments/actions/index.vue";
import { mockData } from "../mockData";

describe("components/aside/equipament/history", () => {
  it("should render", async () => {
    const wrapper = await mountSuspended(EquipamentActions, {
      props: {
        equipament_id: mockData[0].id,
        vehicle_id: mockData[0].vehicle.id,
      },
    });

    const actions = wrapper.findAll("a");

    expect(wrapper.exists()).toEqual(true);
    expect(actions).toHaveLength(1);
    
    expect(wrapper.html()).toContain("/equipamento/a7c53eb1-4f5e-4eba-9764-ad205d0891f9");
    // expect(wrapper.html()).toContain("/veiculo/a3540227-2f0e-4362-9517-92f41dabbfdf");
  });
});