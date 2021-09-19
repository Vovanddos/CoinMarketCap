export interface IResponse {
    data:ICrypts,
    status:any
}

export interface ICrypts {
    id: number
    name: string
    symbol: string
    price: ICryptsFull["price"]
    percent_change_24h: ICryptsFull["percent_change_24h"]
    percent_change_1h: ICryptsFull["percent_change_1h"]
    market_cap: ICryptsFull["market_cap"]
    last_updated: number
    quote:IQuote
}

export interface ICryptsFull {
    id: number
    name: string
    symbol: string
    price: number
    percent_change_24h: number
    percent_change_1h: number
    market_cap: number
    last_updated: number
    quote: IQuote
}
export interface IQuote {
    USD: IUsd
}

export interface IUsd {
    fully_diluted_market_cap: number
    last_updated: string
    market_cap: number
    market_cap_dominance: number
    percent_change_1h: number
    percent_change_7d: number
    percent_change_24h: number
    percent_change_30d: number
    percent_change_60d: number
    percent_change_90d: number
    price: number
    volume_24h: number
}

