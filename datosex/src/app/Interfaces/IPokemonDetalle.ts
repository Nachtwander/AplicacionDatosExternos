import { ISprites } from "./ISprites"

export interface IPokemonDetalle{
    id:number
    name: string
    height: number
    weight: number
    sprite: ISprites
}