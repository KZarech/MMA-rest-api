import {Column, Entity, JoinColumn, OneToMany, ManyToOne, PrimaryGeneratedColumn, JoinTable} from "typeorm";
import {Location} from "../../location/entities/location.entity";
import {Fight} from "../../fight/entities/fight.enity";
import {EventFight} from "../../event__fight/entities/event_fight.entity";

@Entity('events')
export class Event {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100, nullable: false })
    name: string;

    @ManyToOne(() => Location, (location) => location.id, { lazy: true })
    @JoinColumn({name: 'location'})
    location: Location;

    @Column({ type: 'date', nullable: false })
    date: Date;

    @Column({type: 'text', nullable: true})
    description: string;

    @OneToMany(() => EventFight, (eventFight) => eventFight.event, { lazy: true })
    eventFights: EventFight[];
}