export interface PositionHistory {
    date: string;
    lat: number;
    lon: number;
}

export interface StateHistory {
    date: string;
    state: {
        name: string;
        color: string;
    };
}

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
    lastUpdate: string; //Date
    state: {
        name: string;
        color: string;
    };
}

export interface OrganizedStateHistory {
    date: Date;
    position: {
        lat: number;
        lon: number;
    },
    states: {
        time: string;
        color: string;
        name: string;
    }[];
}