import type { OrganizedStateHistory } from "@/assets/types/equipament";

export const mockData: OrganizedStateHistory[] = [{
    date: new Date("2021-02-01T03:00:00.000Z"),
    states: [
        {
            color: "#e74c3c",
            name: "Manutenção",
            time: "2021-02-01T03:00:00.000Z"
        },
        {
            color: "#f1c40f",
            name: "Parado",
            time: "2021-02-01T07:00:00.000Z"
        }
    ],
    position: {
        lat: -19.126536,
        lon: -45.947756
    }
}]