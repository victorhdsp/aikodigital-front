interface MarkOptions {
    title: string;
    state: {
        color: string;
        name: string;
    };
    url: string;
}

export interface MarkProps {
    id: string;
    lat: number;
    lon: number;
    options: MarkOptions;
}