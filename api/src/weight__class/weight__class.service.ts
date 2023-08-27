import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm"
import {WeightClass} from "./entities/weight__class.entity";
import {CreateWeightClassDto} from "./dtos/create-weightClass";

@Injectable()
export class WeightClassService {
    constructor(@InjectRepository(WeightClass) private readonly weightRepository: Repository<WeightClass>) {

    }

    async create(dto: CreateWeightClassDto) {
        const weightClass = this.weightRepository.create(dto)

        return await this.weightRepository.save(weightClass)
    }

    getAll() {
        return this.weightRepository.find()
    }

    getOne(id: number) {
        return this.weightRepository.find({where: {id}})
    }

    async update(id: number, dto: CreateWeightClassDto) {
        const weightClass = await this.weightRepository.findOne({where: {id}})

        const updateData = Object.assign(weightClass, dto)

        await this.weightRepository.update(id, updateData)
        return updateData
    }

    async deleteClass (id: number) {
        await this.weightRepository.delete({id})
        return {id: id}
    }
}