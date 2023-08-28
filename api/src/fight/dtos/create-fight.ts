export class CreateFightDto {
    name: string
    opponent_one: number
    opponent_two: number
    weight_class: number
    event: number
    time?: string
}