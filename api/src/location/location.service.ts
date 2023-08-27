import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm"
import {Location} from "./entities/location.entity";
import {CreateLocationDto} from "./dtos/create-location";

@Injectable()
export class LocationService {
    constructor(@InjectRepository(Location) private readonly locationRepository: Repository<Location>) {

    }

    async createLocation(dto: CreateLocationDto) {
        const location = this.locationRepository.create(dto)

        return await this.locationRepository.save(location)
    }

    getLocations() {
        return this.locationRepository.find()
    }

    getLocation(id: number) {
        return this.locationRepository.find({where: {id}})
    }

    async updateClass(id: number, dto: CreateLocationDto) {
        const location = await this.locationRepository.findOne({where: {id}})

        const updateData = Object.assign(location, dto)

        await this.locationRepository.update(id, updateData)
        return updateData
    }

    async deleteClass(id: number) {
        await this.locationRepository.delete({id})
        return {id: id}
    }
}