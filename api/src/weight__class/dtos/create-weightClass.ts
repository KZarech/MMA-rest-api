import {ApiProperty} from "@nestjs/swagger";

export class CreateWeightClassDto {
    @ApiProperty()
    name: string
}