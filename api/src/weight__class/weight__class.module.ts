import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {WeightClass} from "./entities/weight__class.entity";

@Module({
    imports: [TypeOrmModule.forFeature([WeightClass])]
})
export class WeightClassModule {

}
