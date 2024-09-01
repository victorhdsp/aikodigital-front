import type { EquipamentSimple } from "~/assets/types/equipament";

export const mockEquipamentsData: EquipamentSimple[] = [
    {
        id: "a7c53eb1-4f5e-4eba-9764-ad205d0891f9",
        name: "CA-0001",
        lastUpdateDate: "2021-02-01T07:00:00.000Z",
        lat: -19.126536,
        lon: -45.947756,
        state: "baff9783-84e8-4e01-874b-6fd743b875ad",
        vehicle: {
            id: "a3540227-2f0e-4362-9517-92f41dabbfdf",
            name: "Caminhão de carga",
        }
    },
    {
        id: "a3540227-2f0e-4362-9517-92f41dabbfdf",
        name: "CA-0002",
        lastUpdateDate: "2021-02-02T07:00:00.000Z",
        lat: -19.126536,
        lon: -45.947756,
        state: "03b2d446-e3ba-4c82-8dc2-a5611fea6e1f",
        vehicle: {
            id: "a7c53eb1-4f5e-4eba-9764-ad205d0891f9",
            name: "Caminhão de carga",
        }
    }
]