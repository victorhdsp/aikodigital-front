import type { EquipamentComplete } from "~/assets/types/equipament";

export const mockEquipamentData: EquipamentComplete = {
    id: "a7c53eb1-4f5e-4eba-9764-ad205d0891f9",
    name: "CA-0001",
    positionHistory: [
        {
            date: "2021-02-01T03:00:00.000Z",
            lat: -19.126536,
            lon: -45.947756
        },
        {
            date: "2021-02-01T05:00:00.000Z",
            lat: -19.126536,
            lon: -45.947756
        },
    ],
    stateHistory: [
        {
            date: "2021-02-01T03:00:00.000Z",
            state: "03b2d446-e3ba-4c82-8dc2-a5611fea6e1f"
        },
        {
            date: "2021-02-01T05:00:00.000Z",
            state: "0808344c-454b-4c36-89e8-d7687e692d57"
        },
        {
            date: "2021-02-01T07:00:00.000Z",
            state: "baff9783-84e8-4e01-874b-6fd743b875ad"
        }
    ],
    vehicle: {
        id: "a3540227-2f0e-4362-9517-92f41dabbfdf",
        name: "Caminhão de carga",
        hourlyEarnings: [
            {
                state: "0808344c-454b-4c36-89e8-d7687e692d57",
                value: 100
            },
            {
                state: "baff9783-84e8-4e01-874b-6fd743b875ad",
                value: -5
            },
            {
                state: "03b2d446-e3ba-4c82-8dc2-a5611fea6e1f",
                value: -20
            }
        ]
    }
}