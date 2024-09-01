export interface PositionHistory {
    date: string;
    lat: number;
    lon: number;
}

export interface StateHistory {
    date: string;
    state: string;
}

export interface EquipamentComplete {
    id: string;
    name: string;
    vehicle: {
        name: string;
        id: string;
        hourlyEarnings: {
            state: string;
            value: number;
        }[];
    };
    positionHistory: PositionHistory[];
    stateHistory: StateHistory[];
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
    lastUpdateDate: string;
    state: string;
}

export interface OrganizedStateHistory {
    date: Date;
    position: {
        lat: number;
        lon: number;
    },
    states: {
        time: string;
        id: string;
    }[];
}