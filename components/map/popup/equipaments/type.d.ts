interface MarkOptions {
    title: string;
    state: string;
    url: string;
}

export interface MarkProps {
    id: string;
    lat: number;
    lon: number;
    options: MarkOptions;
}