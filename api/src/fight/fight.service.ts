import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm"
import {Fighter} from "../fighter/entities/fighter.entity";
import {Fight} from "./entities/fight.entity";
import {CreateFightDto} from "./dtos/create-fight";
import {WeightClass} from "../weight__class/entities/weight__class.entity";
import {Event} from "../event/entities/event.entity";
import {EditFightDto} from "./dtos/edit-fight";

@Injectable()
export class FightService {
    constructor(
        @InjectRepository(Fight) private readonly fightRepository: Repository<Fight>,
        @InjectRepository(Fighter) private readonly fighterRepository: Repository<Fighter>,
        @InjectRepository(WeightClass) private readonly weightClassRepository: Repository<WeightClass>,
        @InjectRepository(Event) private readonly eventRepository: Repository<Event>,
    ) {}

    async createFight(dto: CreateFightDto) {
        const promises = [
            this.weightClassRepository.findOne({where: {id: dto.weight_class}}),
            this.fighterRepository.findOne({where: {id: dto.opponent_one}, relations: ['weight_class']}),
            this.fighterRepository.findOne({where: {id: dto.opponent_two}, relations: ['weight_class']}),
            this.eventRepository.findOne({where: {id: dto.event}})
        ]

        try {
            const [weight_class, opponentOne, opponentTwo, event] = await Promise.all(promises)

            if (opponentOne instanceof Fighter && opponentTwo instanceof Fighter ) {
                if (opponentOne.weight_class.id !== opponentTwo.weight_class.id)
                    return new HttpException('Fighters must be in the same weight class', HttpStatus.BAD_REQUEST);
                if (opponentOne.weight_class.id !== weight_class.id || opponentTwo.weight_class.id !== weight_class.id)
                    return new HttpException('Fighters weight class must match the weight class of the fight', HttpStatus.BAD_REQUEST);
            }

            const fight = this.fightRepository.create(Object.assign({
                ...dto,
                weight_class: weight_class,
                opponent_one: opponentOne,
                opponent_two: opponentTwo,
                event: event,
            }));
            return await this.fightRepository.save(fight)
        } catch (e) {
            console.log('Creating fight error:')
            console.log(e)
            throw new Error('Fight creation failed')
        }
    }

    // TODO: in all get items - search by name
    getFights(event?: number) {
        console.log('getFights endpoint log')
        if(event) {
            const query = this.fightRepository.createQueryBuilder('fight')
                .leftJoinAndSelect('fight.opponent_one', 'opponent_one')
                .leftJoinAndSelect('fight.opponent_two', 'opponent_two')
                .leftJoinAndSelect('fight.event', 'event')
                .leftJoinAndSelect('fight.winner', 'winner')
                .leftJoinAndSelect('fight.weight_class', 'weight_class')
            query.where('fight.event = :event', { event: event })

            return query.getMany()
        }

        return this.fightRepository.find()
    }

    getFight(id: number) {
        return this.fightRepository.find({where: {id}})
    }

    async updateFight(id: number, dto: EditFightDto) {
        const fight = await this.fightRepository.findOne({where: {id}})

        const updateData = Object.assign(
            fight,
            dto
        )

        await this.fightRepository.save(updateData)
        return updateData
    }

    async deleteFight(id: number) {
        await this.fightRepository.delete({id})
        return {id: id}
    }
}