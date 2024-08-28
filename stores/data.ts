import { defineStore } from "pinia";
import type { EquipamentSimple } from "~/assets/types/equipament";
import type { MarkProps } from "~/components/map/marks/mark/type";
import { getEquipamentList } from "~/lib/api";

export const useStore = defineStore("equipaments", () => {
    const marks = ref<MarkProps[]>([]);
    const equipaments = ref<EquipamentSimple[]>([]);

    async function fetchEquipamentList () {
        const list = await getEquipamentList();
        equipaments.value = list;
        marks.value = list.map((equipament) => ({
            id: equipament.id,
            lat: equipament.lat,
            lon: equipament.lon,
            title: equipament.name,
        }));
    }
    
    return { marks, equipaments, fetchEquipamentList };
});