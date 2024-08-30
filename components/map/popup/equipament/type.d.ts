interface MarkOptions {
    states: {
        color: string;
        name: string;
        time: string;
    }[];
}

export interface MarkProps {
    id: string;
    lat: number;
    lon: number;
    options: MarkOptions;
}