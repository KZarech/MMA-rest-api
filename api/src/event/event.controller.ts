import {Body, Controller, Get, Param, Post, Put, Delete, Query} from "@nestjs/common";
import {EventService} from "./event.service";
import {CreateEventDto} from "./dtos/create-event";

@Controller('events')
export class EventController {
    constructor(private readonly eventService: EventService) {}

    @Post()
    createEvent(@Body() dto: CreateEventDto) {
        return this.eventService.createEvent(dto)
    }

    @Get()
    getEvents(@Query('location') locationId?: number) {
        return this.eventService.getEvents(locationId)
    }

    @Get(':id')
    getEvent(@Param('id', ) id: number) {
        return this.eventService.getEvent(id)
    }

    @Put(':id')
    updateEvent(@Param('id') id: number, @Body() dto: CreateEventDto) {
        return this.eventService.updateEvent(id ,dto)
    }

    @Delete(':id')
    deleteEvent(@Param('id') id: number) {
        return this.eventService.deleteEvent(id)
    }
}