import {ApiProperty} from "@nestjs/swagger";

export class CreateEventDto {
    @ApiProperty()
    name: string
    @ApiProperty()
    location: number
    @ApiProperty()
    date: Date
    @ApiProperty()
    description?: string
}