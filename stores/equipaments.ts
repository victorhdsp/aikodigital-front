import { defineStore } from "pinia";
import type { EquipamentSimple } from "~/assets/types/equipament";
import { getEquipamentList } from "~/lib/api";

export const useEquipamentsStore = defineStore("equipaments", () => {
    const list = ref<EquipamentSimple[]>([]);

    async function fetchList (): Promise<EquipamentSimple[]> {
        list.value = await getEquipamentList();
        return list.value;
    }
    
    return { list, fetchList };
});