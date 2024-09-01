import { defineStore } from "pinia";

export const useMapStore = defineStore("map", () => {
    const center = ref<[number, number]>([0, 0]);
    const bounce = ref(0);
    
    const setCenter = (lat: number, lon: number) => {
        center.value = [lat, lon];
    }

    return { center, bounce, setCenter };
});