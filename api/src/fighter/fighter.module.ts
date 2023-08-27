import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {FighterController} from "./fighter.controller";
import {FighterService} from "./fighter.service";
import {Fighter} from "./entities/fighter.entity";
import {WeightClass} from "../weight__class/entities/weight__class.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Fighter, WeightClass])],
    controllers: [FighterController],
    providers: [FighterService],
})
export class FighterModule {}
