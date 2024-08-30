import { defineStore } from "pinia";
import type { EquipamentSimple } from "~/assets/types/equipament";
import { getEquipamentList } from "~/lib/api";

export const useEquipamentsStore = defineStore("equipaments", () => {
    const baseList = ref<EquipamentSimple[]>([]);
    const filteredList = ref<EquipamentSimple[]>([]);
    const list = ref<EquipamentSimple[]>([]);

    async function fetchList (): Promise<EquipamentSimple[]> {
        baseList.value = await getEquipamentList();
        list.value = baseList.value
        filteredList.value = baseList.value
        return list.value;
    }

    function filterBySearch (search: string): void {
        if (!search) {
            list.value = filteredList.value;
            return;
        }
        
        list.value = filteredList.value.filter((equipament) => {
            const content = [
                equipament.name,
                equipament.vehicle.name,
                equipament.state.name
            ].join(" ");
            
            const treatment = (content: string) => content.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

            return treatment(content).includes(treatment(search));
        });
    }

    function filterByTag (tag: string): void {
       if (!tag) {
           list.value = baseList.value;
           return;
       }

         list.value = baseList.value.filter((equipament) => {
              return equipament.state.name === tag;
         });
    }
    
    return { list, fetchList, filterBySearch, filterByTag };
});