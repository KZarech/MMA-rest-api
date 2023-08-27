import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {WeightClass} from "./entities/weight__class.entity";
import {WeightClassController} from "./weight__class.controller";
import {WeightClassService} from "./weight__class.service";

@Module({
    imports: [TypeOrmModule.forFeature([WeightClass])],
    controllers: [WeightClassController],
    providers: [WeightClassService],
})
export class WeightClassModule {

}
