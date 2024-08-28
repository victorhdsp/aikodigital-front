export interface EquipamentComplete {
    id: string;
    product: string;
    equipamentModel: {
        name: string;
        hourlyEarnings: {
            equipamentState: {
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
    equipamentStateHistory: {
        date: string;
        equipamentState: {
            name: string;
            color: string;
        };
    }[];
}

export interface EquipamentSimple {
    id: string;
    name: string;
    veicule: string;
    lat: number;
    lon: number;
    lastUpdate: string; //Date
    state: {
        name: string;
        color: string;
    };
}