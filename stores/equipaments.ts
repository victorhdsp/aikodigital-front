import { defineStore } from "pinia";
import type { EquipamentSimple } from "~/assets/types/equipament";
import { getEquipamentList } from "~/lib/api";

function treatment (str: string) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

export const useEquipamentsStore = defineStore("equipaments", () => {
    const baseList = ref<EquipamentSimple[]>([]);
    const list = ref<EquipamentSimple[]>([]);

    const filters = ref({
        search: "",
        status: ""
    });

    async function fetchList (): Promise<EquipamentSimple[]> {
        baseList.value = await getEquipamentList();
        list.value = baseList.value;
        return list.value;
    }

    function filterBySearch (search: string) {
        filters.value.search = treatment(search);
        filterList();
    }
    function filterByStatus (status: string) {
        filters.value.status = treatment(status);
        filterList();
    }

    function filterList () {
        const filter = filters.value;
        const filteredStatus = baseList.value.filter((equipament) => {
            if (filter.status === "all") return true;
            return filter.status ? equipament.state === filter.status : true;
        });
        const filteredSearch = filteredStatus.filter((equipament) => {
            if (treatment(equipament.name).includes(filter.search)) return true;
            if (treatment(equipament.vehicle.name).includes(filter.search)) return true;
            if (treatment(equipament.lastUpdateDate).includes(filter.search)) return true;
            return false;
        });

        list.value = filteredSearch;
    }
    
    return { list, fetchList, filterBySearch, filterByStatus};
});