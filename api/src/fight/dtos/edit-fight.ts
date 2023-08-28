import {ApiProperty} from "@nestjs/swagger";

export class EditFightDto {
    @ApiProperty()
    name?: string
    @ApiProperty()
    opponent_one?: number
    @ApiProperty()
    opponent_two?: number
    @ApiProperty()
    weight_class?: number
    @ApiProperty()
    event?: number
    @ApiProperty()
    time?: string
    @ApiProperty()
    winner?: number
    @ApiProperty()
    state?: number
}