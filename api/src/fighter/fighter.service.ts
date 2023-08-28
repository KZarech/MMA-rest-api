import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm"
import {Fighter} from "./entities/fighter.entity";
import {CreateFighterDto} from "./dtos/create-fighter";
import {EditFighterDto} from "./dtos/edit-fighter";
import {WeightClass} from "../weight__class/entities/weight__class.entity";

@Injectable()
export class FighterService {
    constructor(
        @InjectRepository(Fighter) private readonly fighterRepository: Repository<Fighter>,
        @InjectRepository(WeightClass) private readonly weightClassRepository: Repository<WeightClass>,
    ) {}

    async createFighter(dto: CreateFighterDto) {
        const fighter = this.fighterRepository.create({...dto, weight_class: {id: dto.weight_class}})

        return await this.fighterRepository.save(fighter)
    }

    // TODO: in all get items - search by name
    getFighters(weightClass?: number) {
        if(weightClass) {
            const query = this.fighterRepository.createQueryBuilder('fighter')
            query.where('fighter.weight_class = :weight_class', { weight_class: weightClass })

            return query.getMany()
        }

        return this.fighterRepository.find()
    }

    getFighter(id: number) {
        return this.fighterRepository.find({where: {id}})
    }

    async updateFighter(id: number, dto: EditFighterDto) {
        const fighter = await this.fighterRepository.findOne({where: {id}})

        if(dto.weight_class) {
            const id = dto.weight_class
            const weightClass = await this.weightClassRepository.findOne({where: {id}})
            if(weightClass)
                fighter.weight_class = weightClass
            delete dto.weight_class
        }

        const updateData = Object.assign(
            fighter,
            dto
        )

        await this.fighterRepository.save(updateData)
        return updateData
    }

    async deleteFighter(id: number) {
        await this.fighterRepository.delete({id})
        return {id: id}
    }
}