export interface Iopts {
    id:number,
    nomeOpt: string,
    descOpt: string,
    subOpts: any,
    hide: boolean
} 

export interface IsubOpts{
    label: string,
    value: string
}