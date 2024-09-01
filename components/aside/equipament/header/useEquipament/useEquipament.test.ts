import { describe, test, expect } from "vitest";
import { mockData } from "~/tests/__mock__/equipament.js";
import { getHoursByStates, getLastData, getProductivity, getProfitByEquipament } from "./index";

describe("useEquipament", () => {
    test("Busca a quantidade de horas de determinado 'status'.", () => {
        const productiveTime = getHoursByStates("Operando", mockData.stateHistory);

        expect(productiveTime).toBe(7200000);
    })

    test("Busca as ultimas informações em determinado equipamento.", () => {
        const lastData = getLastData(mockData);

        expect(lastData).toEqual({
            lastUpdate: "2/1/2021, 12:00:00 AM",
            lastStatus: mockData.stateHistory[0],
            lastPosition: mockData.positionHistory[0]
        });
    });

    test("Busca a produtividade de determinado equipamento.", () => {
        const productivity = getProductivity(mockData);

        expect(productivity).toEqual({ productivity: "50" });
    });

    test("getProfitByEquipament", () => {
        const profitByEquipament = getProfitByEquipament(mockData);

        expect(profitByEquipament).toEqual({ profit: 200, cost: -40 });
    });

    test.todo("calcula a performance do equipamento.");  
});