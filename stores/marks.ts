import { defineStore } from "pinia";
import type { MarkProps } from "~/components/map/marks/mark/type";

export const useMarksStore = defineStore("marks", () => {
    const list = ref<MarkProps[]>([]);
    const center = ref<[number, number]>([0, 0]);

    function set (marks: MarkProps[]): void {
        list.value = marks;
        center.value = [marks[0].lat, marks[0].lon];
    }
    
    return { list, center, set };
});