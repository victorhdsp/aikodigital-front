import { describe, test, expect } from "vitest";
import { mockEquipamentData } from "~/tests/__mock__/equipament.js";
import { getHoursByStates, getLastData, getProductivity, getProfitByEquipament } from "./index";

describe("useEquipament", () => {
    test("Busca a quantidade de horas de determinado 'status'.", () => {
        const productiveTime = getHoursByStates(
            "0808344c-454b-4c36-89e8-d7687e692d57",
            mockEquipamentData.stateHistory
        );

        expect(productiveTime).toBe(7200000);
    })

    test("Busca as ultimas informações em determinado equipamento.", () => {
        const lastData = getLastData(mockEquipamentData);

        expect(lastData).toEqual({
            lastUpdate: "2/1/2021, 12:00:00 AM",
            lastStatus: mockEquipamentData.stateHistory[0],
            lastPosition: mockEquipamentData.positionHistory[0]
        });
    });

    test("Busca a produtividade de determinado equipamento.", () => {
        const productivity = getProductivity(mockEquipamentData);

        expect(productivity).toEqual({ productivity: "50" });
    });

    test("getProfitByEquipament", () => {
        const profitByEquipament = getProfitByEquipament(mockEquipamentData);

        expect(profitByEquipament).toEqual({ profit: 200, cost: -40 });
    });

    test.todo("calcula a performance do equipamento.");  
});