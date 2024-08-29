import { defineStore } from "pinia";
import type { EquipamentComplete } from "~/assets/types/equipament";
import { getEquipament } from "~/lib/api";

export const useEquipamentStore = defineStore("equipament", () => {
    const item = ref<EquipamentComplete>();

    async function fetchById (id:string): Promise<EquipamentComplete> {
        item.value = await getEquipament(id);
        return item.value;
    }
    
    return { item, fetchById };
});