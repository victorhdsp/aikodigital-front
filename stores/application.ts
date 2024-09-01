import { defineStore } from "pinia";
import { fetchEquipamentStates } from "~/lib/api";

interface UI {
    states: {
        [key: string]: {
            name: string;
            color: string;
        };
    }
}

export const useApplicationStore = defineStore("application", () => {
    const ui = ref<UI>({
        states: {
            "all": {
                name: "Todos",
                color: "gray",
            }
        }
    });

    onMounted(async () => {
        const states = await fetchEquipamentStates();
        
        states.forEach((state) => {
            ui.value.states[state.id] = {
                name: state.name,
                color: state.color,
            };
        });
    });

    return { ui };
});