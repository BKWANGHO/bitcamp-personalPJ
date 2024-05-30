export interface ITrade{
    id? : number
    title? : string
    content? : string
    writer? : string
    board? : number
    regDate? : string
    modDate? : string
    array? : ITrade[]
    json? : ITrade
}