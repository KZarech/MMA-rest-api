import {WeightClassService} from "./weight__class.service";
import {Body, Controller, Get, Param, Post, Put, Delete} from "@nestjs/common";
import {CreateWeightClassDto} from "./dtos/create-weightClass";

@Controller('weight-classes')
export class WeightClassController {
    constructor(private readonly weightClassService: WeightClassService) {}

    @Post()
    createClass(@Body() dto: CreateWeightClassDto) {
        return this.weightClassService.createClass(dto)
    }

    @Get()
    getClasses() {
        return this.weightClassService.getClasses()
    }

    @Get(':id')
    getClass(@Param('id', ) id: number) {
        return this.weightClassService.getClass(id)
    }

    @Put(':id')
    updateClass(@Param('id') id: number, @Body() dto: CreateWeightClassDto) {
        return this.weightClassService.updateClass(id ,dto)
    }

    @Delete(':id')
    deleteClass(@Param('id') id: number) {
        return this.weightClassService.deleteClass(id)
    }
}