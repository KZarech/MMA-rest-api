import {WeightClassService} from "./weight__class.service";
import {Body, Controller, Get, Param, Post, Put, Delete} from "@nestjs/common";
import {CreateWeightClassDto} from "./dtos/create-weightClass";

@Controller('weight-classes')
export class WeightClassController {
    constructor(private readonly weightClassService: WeightClassService) {}

    @Post()
    create(@Body() dto: CreateWeightClassDto) {
        return this.weightClassService.create(dto)
    }

    @Get()
    getAll() {
        return this.weightClassService.getAll()
    }

    @Get(':id')
    getOne(@Param('id', ) id: number) {
        return this.weightClassService.getOne(id)
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() dto: CreateWeightClassDto) {
        return this.weightClassService.update(id ,dto)
    }

    @Delete(':id')
    deleteClass(@Param('id') id: number) {
        return this.weightClassService.deleteClass(id)
    }
}