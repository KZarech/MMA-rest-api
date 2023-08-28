import {Controller, Get, Query} from "@nestjs/common";
import {RankingService} from "./ranking.service";

@Controller('rankings')
export class RankingController {
    constructor(private readonly rankingService: RankingService) {}

    @Get()
    getRankings(@Query('weight_class') weightClass?: number) {
        return this.rankingService.getRankings(weightClass)
    }

    @Get('ranking')
    getRanking(@Query('fighter') fighter?: number, @Query('fight') fight?: number) {
        return this.rankingService.getRanking(fighter, fight)
    }
}