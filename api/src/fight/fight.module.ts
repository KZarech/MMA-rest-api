import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {FightController} from "./fight.controller";
import {FightService} from "./fight.service";
import {Fighter} from "../fighter/entities/fighter.entity";
import {Fight} from "./entities/fight.entity";
import {WeightClass} from "../weight__class/entities/weight__class.entity";
import {Event} from "../event/entities/event.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Fight, Fighter, Event, WeightClass])],
    controllers: [FightController],
    providers: [FightService],
})
export class FightModule {}
