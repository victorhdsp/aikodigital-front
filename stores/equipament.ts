import { defineStore } from "pinia";
import type { EquipamentComplete } from "~/assets/types/equipament";
import type { OrganizedStateHistory } from "@/assets/types/equipament";
import { organizeStateHistory } from "~/components/aside/equipament/history/useHistory";
import { getEquipament } from "~/lib/api";

function treatment (str: string) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

export const useEquipamentStore = defineStore("equipament", () => {
    const baseStateHistory = ref<OrganizedStateHistory[]>([]);
    const stateHistory = ref<OrganizedStateHistory[]>([]);
    const item = ref<EquipamentComplete>();

    const filters = ref({
        search: "",
        status: ""
    });

    async function fetchById (id:string): Promise<EquipamentComplete> {
        item.value = await getEquipament(id);
        baseStateHistory.value = organizeStateHistory(
            item.value.stateHistory, 
            item.value.positionHistory
        );
        stateHistory.value = baseStateHistory.value;
        return item.value;
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
        const { search, status } = filters.value;
        const filteredStatus = baseStateHistory.value?.map((item) => {
            const states = item.states.filter((state) => {
                return treatment(state.name).includes(status);
            });
            return { ...item, states };
        }).filter((item) => item.states.length > 0);
        
        const filteredSearch = filteredStatus?.filter((item) => {
            if (treatment(item.date.toLocaleString()).includes(search)) return true;
            return false;
        });
        
        stateHistory.value = filteredSearch;
    }
    
    
    return { item, stateHistory, fetchById, filterBySearch, filterByStatus };
});