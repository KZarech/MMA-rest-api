import {Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, ManyToMany} from "typeorm";
import {Event} from "../../event/entities/event.entity";
import {Fight} from "../../fight/entities/fight.enity";

@Entity('events__fights')
export class EventFight {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Event, (event) => event.eventFights, {lazy: true})
    @JoinColumn({name: 'event'})
    event: Event;

    // TODO: fix fight entity; error: Entity metadata for EventFight#fight was not found
    // @ManyToOne(() => Fight, (fight) => fight.eventFights, {lazy: true})
    // @JoinColumn({name: 'fight'})
    // fight: Fight;
}