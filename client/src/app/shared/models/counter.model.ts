export interface CounterModel {
    [prospecting:string]: {
        count: number;
        selected: boolean;
    },
    qualified: {
        count: number;
        selected: boolean;
    },
    quoting: {
        count: number;
        selected: boolean;
    },
    won_closed: {
        count: number;
        selected: boolean;
    }
}

