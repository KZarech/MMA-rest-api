import {Body, Controller, Get, Param, Post, Put, Delete} from "@nestjs/common";
import {LocationService} from "./location.service";
import {CreateLocationDto} from "./dtos/create-location";

@Controller('locations')
export class LocationController {
    constructor(private readonly locationService: LocationService) {}

    @Post()
    createLocation(@Body() dto: CreateLocationDto) {
        return this.locationService.createLocation(dto)
    }

    @Get()
    getLocations() {
        return this.locationService.getLocations()
    }

    @Get(':id')
    getLocation(@Param('id', ) id: number) {
        return this.locationService.getLocation(id)
    }

    @Put(':id')
    updateLocation(@Param('id') id: number, @Body() dto: CreateLocationDto) {
        return this.locationService.updateClass(id ,dto)
    }

    @Delete(':id')
    deleteLocation(@Param('id') id: number) {
        return this.locationService.deleteClass(id)
    }
}