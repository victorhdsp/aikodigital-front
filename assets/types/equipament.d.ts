export interface EquipamentComplete {
    id: string;
    name: string;
    vehicle: {
        name: string;
        id: string;
        hourlyEarnings: {
            state: {
                name: string;
                color: string;
            };
            value: number;
        }[];
    };
    positionHistory: {
        date: string;
        lat: number;
        lon: number;
    }[];
    stateHistory: {
        date: string;
        state: {
            name: string;
            color: string;
        };
    }[];
}

export interface EquipamentSimple {
    id: string;
    name: string;
    vehicle: {
        name: string;
        id: string;
    },
    lat: number;
    lon: number;
    lastUpdate: string; //Date
    state: {
        name: string;
        color: string;
    };
}