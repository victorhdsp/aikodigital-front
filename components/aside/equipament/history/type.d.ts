import type { EquipamentComplete } from "@/assets/types/equipament";

export type StateHistory = EquipamentComplete["stateHistory"];
export type PositionHistory = EquipamentComplete["positionHistory"];

export interface OrganizedStateHistory {
    date: Date;
    position: {
        lat: number;
        lon: number;
    },
    states: {
        time: string;
        color: string;
        name: string;
    }[];
}