import { describe, test, expect } from "vitest";
import { organizeStateHistory, filterStatesByDate, bruteStateHistory } from "./index";
import { mockEquipamentData } from "~/tests/__mock__/equipament.js";

describe("components/aside/equipament/history/useHistory", () => {
    test("filterStatesByDate", () => {
        const states = mockEquipamentData.stateHistory;
        const positions = mockEquipamentData.positionHistory;
        const index = 0;
        const result = filterStatesByDate(states, positions, index);
        
        expect(result).toEqual([{
            state: "baff9783-84e8-4e01-874b-6fd743b875ad",
            date: "2021-02-01T07:00:00.000Z"
        }]);
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
                states: [{
                    id: "baff9783-84e8-4e01-874b-6fd743b875ad",
                    time: "2/1/2021, 4:00:00 AM"
                }]
            },
            {
                date: new Date("2021-02-01T05:00:00.000Z"),
                position: {
                    lat: -19.126536,
                    lon: -45.947756
                },
                states: []
            }
        ]);
    });

    test("organizeStateHistory", () => {
        const states = mockEquipamentData.stateHistory;
        const positions = mockEquipamentData.positionHistory;
        const result = organizeStateHistory(states, positions);
        
        expect(result).toEqual([{
            date: new Date("2021-02-01T03:00:00.000Z"),
            position: {
                lat: -19.126536,
                lon: -45.947756
            },
            states: [
                {
                    id: "baff9783-84e8-4e01-874b-6fd743b875ad",
                    time: "2/1/2021, 4:00:00 AM"
                }
            ]
        }]);
    });
})