import { describe, test, expect } from "vitest";
import { organizeStateHistory, filterStatesByDate, bruteStateHistory } from "./index";
import { mockEquipamentData } from "~/tests/__mock__/equipament.js";

describe("components/aside/equipament/history/useHistory", () => {
    test("filterStatesByDate", () => {
        const states = mockEquipamentData.stateHistory;
        const positions = mockEquipamentData.positionHistory;
        const index = 0;
        const result = filterStatesByDate(states, positions, index);
        
        expect(result).toEqual([]);
    });

    test("bruteStateHistory", () => {
        const states = mockEquipamentData.stateHistory;
        const positions = mockEquipamentData.positionHistory;
        const result = bruteStateHistory(states, positions);
        
        expect(result).toEqual([
            {
                date: new Date("2021-02-01T03:00:00.000Z"),
                position: {
                    lat: -19.126536,
                    lon: -45.947756
                },
                states: []
            },
            {
                date: new Date("2021-02-01T05:00:00.000Z"),
                position: {
                    lat: -19.126536,
                    lon: -45.947756
                },
                states: [
                    {
                        id: "03b2d446-e3ba-4c82-8dc2-a5611fea6e1f",
                        time: "2/1/2021, 12:00:00 AM"
                    },
                    {
                        id: "0808344c-454b-4c36-89e8-d7687e692d57",
                        time: "2/1/2021, 2:00:00 AM"
                    }
                ]
            }
        ]);
    });

    test("organizeStateHistory", () => {
        const states = mockEquipamentData.stateHistory;
        const positions = mockEquipamentData.positionHistory;
        const result = organizeStateHistory(states, positions);
        
        expect(result).toEqual([{
            date: new Date("2021-02-01T05:00:00.000Z"),
            position: {
                lat: -19.126536,
                lon: -45.947756
            },
            states: [
                {
                    id: "03b2d446-e3ba-4c82-8dc2-a5611fea6e1f",
                    time: "2/1/2021, 12:00:00 AM"
                },
                {
                    id: "0808344c-454b-4c36-89e8-d7687e692d57",
                    time: "2/1/2021, 2:00:00 AM"
                }
            ]
        }]);
    });
})