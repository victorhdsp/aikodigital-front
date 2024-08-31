import { describe, test, expect } from "vitest";
import { organizeStateHistory, filterStatesByDate, bruteStateHistory } from "./index";
import { mockData } from "~/tests/__mock__/equipament.js";

describe("components/aside/equipament/history/useHistory", () => {
    test("filterStatesByDate", () => {
        const states = mockData.stateHistory;
        const positions = mockData.positionHistory;
        const index = 0;
        const result = filterStatesByDate(states, positions, index);
        
        expect(result).toEqual([]);
    });

    test("bruteStateHistory", () => {
        const states = mockData.stateHistory;
        const positions = mockData.positionHistory;
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
                        color: "#e74c3c",
                        name: "Manutenção",
                        time: "2/1/2021, 12:00:00 AM"
                    }
                ]
            }
        ]);
    });

    test("organizeStateHistory", () => {
        const states = mockData.stateHistory;
        const positions = mockData.positionHistory;
        const result = organizeStateHistory(states, positions);
        
        expect(result).toEqual([{
            date: new Date("2021-02-01T05:00:00.000Z"),
            position: {
                lat: -19.126536,
                lon: -45.947756
            },
            states: [
                {
                    color: "#e74c3c",
                    name: "Manutenção",
                    time: "2/1/2021, 12:00:00 AM"
                }
            ]
        }]);
    });
})