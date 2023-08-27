import {Body, Controller, Get, Param, Post, Put, Delete, Query} from "@nestjs/common";
import {FighterService} from "./fighter.service";
import {CreateFighterDto} from "./dtos/create-fighter";
import {EditFighterDto} from "../event/dtos/edit-fighter";

@Controller('fighters')
export class FighterController {
    constructor(private readonly fighterService: FighterService) {}

    @Post()
    createFighter(@Body() dto: CreateFighterDto) {
        return this.fighterService.createFighter(dto)
    }

    @Get()
    getFighters(@Query('weight-class') weightClass?: number) {
        return this.fighterService.getFighters(weightClass)
    }

    @Get(':id')
    getFighter(@Param('id', ) id: number) {
        return this.fighterService.getFighter(id)
    }

    @Put(':id')
    updateFighter(@Param('id') id: number, @Body() dto: EditFighterDto) {
        return this.fighterService.updateFighter(id ,dto)
    }

    @Delete(':id')
    deleteFighter(@Param('id') id: number) {
        return this.fighterService.deleteFighter(id)
    }
}