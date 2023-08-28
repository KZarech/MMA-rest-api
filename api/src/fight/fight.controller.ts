import {Body, Controller, Get, Param, Post, Put, Delete, Query, Patch} from "@nestjs/common";
import {FightService} from "./fight.service";
import {CreateFightDto} from "./dtos/create-fight";
import {EditFightDto} from "./dtos/edit-fight";
import {FinishFightDto} from "./dtos/finish-fight";

@Controller('fights')
export class FightController {
    constructor(private readonly fightService: FightService) {}

    @Post()
    createFight(@Body() dto: CreateFightDto) {
        return this.fightService.createFight(dto)
    }

    @Get()
    getFights(@Query('event') event?: number) {
        return this.fightService.getFights(event)
    }

    @Get(':id')
    getFight(@Param('id', ) id: number) {
        return this.fightService.getFight(id)
    }

    @Put(':id')
    updateFight(@Param('id') id: number, @Body() dto: EditFightDto) {
        // TODO: when edit winner - edit ranking
        return this.fightService.updateFight(id ,dto)
    }

    @Delete(':id')
    deleteFight(@Param('id') id: number) {
        return this.fightService.deleteFight(id)
    }

    @Patch('finish')
    finishFight(@Body() dto: FinishFightDto) {
        return this.fightService.finishFight(dto.fightId, dto.winnerId)
    }
}