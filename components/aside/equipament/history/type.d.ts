export interface StateHistory {
    date: Date;
    states: {
        time: string;
        color: string;
        name: string;
    }[];
}