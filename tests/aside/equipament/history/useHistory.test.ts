import { test, describe, expect } from 'vitest'
import { filterStatesByDate, bruteStateHistory, organizeStateHistory } from '@/components/aside/equipament/history/useHistory'
import type { PositionHistory, StateHistory } from '@/components/aside/equipament/history/type'

const states: StateHistory = [
    { 
        date: "2021-02-01T12:00:00.000Z",
        state: {
            name: "Parado",
            color: "#f1c40f"
        }
    },
    { 
        date: "2021-02-02T12:00:00.000Z",
        state: {
            name: "Em movimento",
            color: "#2ecc71"
        }
    },
    { 
        date: "2021-02-02T14:00:00.000Z",
        state: {
            name: "Parado",
            color: "#f1c40f"
        }
    }
]

const positions: PositionHistory = [
    {
        date: "2021-02-01T12:00:00.000Z",
        lat: -23.5505,
        lon: -46.6333,
    },
    {
        date: "2021-02-02T12:00:00.000Z",
        lat: -23.5505,
        lon: -46.6333,
    },
    {
        date: "2021-02-03T12:00:00.000Z",
        lat: -23.5505,
        lon: -46.6333,
    }
]

describe('useHistory', () => {
    test('filterStatesByDate should filter states by date', () => {
        const index = 1

        const filteredStates = filterStatesByDate(states, positions, index);

        expect(filteredStates).toEqual([
            { 
                date: "2021-02-02T12:00:00.000Z",
                state: {
                    name: "Em movimento",
                    color: "#2ecc71"
                }
            },
            { 
                date: "2021-02-02T14:00:00.000Z",
                state: {
                    name: "Parado",
                    color: "#f1c40f"
                }
            }
        ]);
    })

    test('bruteStateHistory should return organized state history', () => {
        const organizedStateHistory = bruteStateHistory(states, positions)

        expect(organizedStateHistory).toEqual([
            {
                date: new Date("2021-02-01T12:00:00.000Z"),
                states: [{
                    name: "Parado",
                    color: "#f1c40f",
                    time: new Date("2021-02-01T12:00:00.000Z").toLocaleString()
                }]
            },
            {
                date: new Date("2021-02-02T12:00:00.000Z"),
                states: [
                    {
                        name: "Em movimento",
                        color: "#2ecc71",
                        time: new Date("2021-02-02T12:00:00.000Z").toLocaleString()
                    },
                    {
                        name: "Parado",
                        color: "#f1c40f",
                        time: new Date("2021-02-02T14:00:00.000Z").toLocaleString()
                    }
                ]
            },
            {
                date: new Date("2021-02-03T12:00:00.000Z"),
                states: []
            }
        ])
    })

    test('organizeStateHistory should filter out empty state history', () => {
        const organizedStateHistory = organizeStateHistory(states, positions)

        expect(organizedStateHistory).toEqual([
            {
                date: new Date("2021-02-01T12:00:00.000Z"),
                states: [{
                    name: "Parado",
                    color: "#f1c40f",
                    time: new Date("2021-02-01T12:00:00.000Z").toLocaleString()
                }]
            },
            {
                date: new Date("2021-02-02T12:00:00.000Z"),
                states: [
                    {
                        name: "Em movimento",
                        color: "#2ecc71",
                        time: new Date("2021-02-02T12:00:00.000Z").toLocaleString()
                    },
                    {
                        name: "Parado",
                        color: "#f1c40f",
                        time: new Date("2021-02-02T14:00:00.000Z").toLocaleString()
                    }
                ]
            },
        ])
    })
})