import {ApiProperty} from "@nestjs/swagger";

export class CreateFighterDto {
    @ApiProperty()
    name: string
    @ApiProperty()
    bitrh_date: Date
    @ApiProperty()
    weight: number
    @ApiProperty()
    weight_class: number
    @ApiProperty()
    nickname?: string
    @ApiProperty()
    nationality?: string
}