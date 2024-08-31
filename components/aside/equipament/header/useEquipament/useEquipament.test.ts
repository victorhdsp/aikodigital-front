import { describe, test, expect } from "vitest";
import { mockData } from "~/tests/__mock__/equipament.js";
import { getLastData, getProductivity, getProfitByEquipament } from "./index";

describe("useEquipament", () => {
    test("getLastData", () => {
        const lastData = getLastData(mockData);
        expect(lastData).toEqual({
            lastUpdate: "2/1/2021, 12:00:00 AM",
            lastStatus: mockData.stateHistory[0],
            lastPosition: mockData.positionHistory[0]
        });
    });

    test("getProductivity", () => {
        const productivity = getProductivity(mockData);
        expect(productivity).toEqual({ productivity: "0" });
    });

    test("getProfitByEquipament", () => {
        const profitByEquipament = getProfitByEquipament(mockData);
        expect(profitByEquipament).toEqual({ profit: 0, cost: -20 });
    });
});