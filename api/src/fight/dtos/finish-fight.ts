import {ApiProperty} from "@nestjs/swagger";

export class FinishFightDto {
    @ApiProperty()
    fightId: number
    @ApiProperty()
    winnerId: number
}