import type { OrganizedStateHistory } from "@/assets/types/equipament";

export const mockStateHistoryData: OrganizedStateHistory[] = [{
    date: new Date("2021-02-01T03:00:00.000Z"),
    states: [
        {
            id: "03b2d446-e3ba-4c82-8dc2-a5611fea6e1f",
            time: "2021-02-01T03:00:00.000Z"
        },
        {
            id: "baff9783-84e8-4e01-874b-6fd743b875ad",
            time: "2021-02-01T07:00:00.000Z"
        }
    ],
    position: {
        lat: -19.126536,
        lon: -45.947756
    }
}]