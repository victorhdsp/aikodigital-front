import type { EquipamentComplete } from "~/assets/types/equipament";

export const mockData: EquipamentComplete = {
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
            state: {
                color: "#e74c3c",
                name: "Manutenção"
            }
        },
        {
            date: "2021-02-01T07:00:00.000Z",
            state: {
                color: "#f1c40f",
                name: "Parado"
            }
        }
    ],
    vehicle: {
        id: "a3540227-2f0e-4362-9517-92f41dabbfdf",
        name: "Caminhão de carga",
        hourlyEarnings: [
            {
                state: {
                    color: "#2ecc71",
                    name: "Operando"
                },
                value: 100
            },
            {
                state: {
                    color: "#f1c40f",
                    name: "Parado"
                },
                value: -5
            },
            {
                state: {
                    color: "#e74c3c",
                    name: "Manutenção"
                },
                value: -20
            }
        ]
    }
}