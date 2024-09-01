interface MarkOptions {
    states: {
        id: string;
        time: string;
    }[];
}

export interface MarkProps {
    id: string;
    lat: number;
    lon: number;
    options: MarkOptions;
}