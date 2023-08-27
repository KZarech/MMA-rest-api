import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm"
import {Event} from "./entities/event.entity";
import {CreateEventDto} from "./dtos/create-event";

@Injectable()
export class EventService {
    constructor(@InjectRepository(Event) private readonly eventRepository: Repository<Event>) {}

    async createEvent(dto: CreateEventDto) {
        const event = this.eventRepository.create({...dto, location: {id: dto.location}})

        return await this.eventRepository.save(event)
    }

    // TODO: in all get items - search by name
    getEvents(location?: number) {
        // TODO: load location id in list of events
        if(location) {
            const query = this.eventRepository.createQueryBuilder('event')
            query.where('event.location = :location', { location })
            return query.getMany()
        }

        return this.eventRepository.find()
    }

    getEvent(id: number) {
        // TODO: here - load info of fights related to event (info of fight, also fighters names)
        return this.eventRepository.find({where: {id}})
    }

    async updateEvent(id: number, dto: CreateEventDto) {
        const event = await this.eventRepository.findOne({where: {id}})

        const updateData = Object.assign(event, dto)

        await this.eventRepository.update(id, updateData)
        return updateData
    }

    async deleteEvent(id: number) {
        await this.eventRepository.delete({id})
        return {id: id}
    }
}