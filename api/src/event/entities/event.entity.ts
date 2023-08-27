import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Location} from "../../location/entities/location.entity";

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
}