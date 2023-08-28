import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm"
import {Ranking} from "./entities/ranking.entity";

@Injectable()
export class RankingService {
    constructor(@InjectRepository(Ranking) private readonly rankingRepository: Repository<Ranking>) {}

    getRankings(weightClass?: number) {
        const query = this.rankingRepository.createQueryBuilder('ranking')
            .leftJoinAndSelect('ranking.fighter', 'fighter')
            .leftJoinAndSelect('ranking.weight_class', 'weight_class')
        if (weightClass) {
            return query
                .where('ranking.weight_class = :weight_class', { weight_class: weightClass})
                .getMany()
        }

        return query.getMany()
    }

    getRanking(fighter?: number, fight?: number) {
        if(fighter || fight) {
            const query = this.rankingRepository.createQueryBuilder('ranking')
                .leftJoinAndSelect('ranking.fighter', 'fighter')
                .leftJoinAndSelect('ranking.weight_class', 'weight_class')

            if(fighter) {
                query.where('ranking.fighter = :fighter', {fighter: fighter})
                return query.getOne()
            }
            if(fight) {
                query
                    .leftJoinAndSelect('fights', 'fight', 'fight.opponent_one = ranking.fighter OR fight.opponent_two = ranking.fighter')
                    .where('fight.id = :fight_id', {fight_id: fight})
                return query.getMany()
            }

            return query.getOne()
        }
    }
}