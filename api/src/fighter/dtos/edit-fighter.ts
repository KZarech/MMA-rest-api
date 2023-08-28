import {ApiProperty} from "@nestjs/swagger";

export class EditFighterDto {
    @ApiProperty()
    name?: string
    @ApiProperty()
    bitrh_date?: Date
    @ApiProperty()
    weight?: number
    @ApiProperty()
    weight_class?: number
    @ApiProperty()
    nickname?: string
    @ApiProperty()
    nationality?: string
    @ApiProperty()
    wins?: number
    @ApiProperty()
    losses?: number
    @ApiProperty()
    knockouts?: number
    @ApiProperty()
    submissions?: number
    @ApiProperty()
    status?: number
}