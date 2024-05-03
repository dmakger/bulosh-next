export interface IParentAmountUnit {
    id: number
    name: string
}


export interface IAmountUnit {
    id: number
    fullname: string
    shortname: string
    parent: IParentAmountUnit
}