import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import {Fighter} from "../../fighter/entities/fighter.entity";
import {WeightClass} from "../../weight__class/entities/weight__class.entity";
import {Event} from "../../event/entities/event.entity";

@Entity('fights')

export class Fight {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100, nullable: false })
    name: string;

    @ManyToOne(() => Fighter, (fighter) => fighter.id,{ lazy: false })
    @JoinColumn({ name: 'opponent_one' })
    opponent_one: Fighter;

    @ManyToOne(() => Fighter, (fighter) => fighter.id,{ lazy: false })
    @JoinColumn({ name: 'opponent_two' })
    opponent_two: Fighter;

    @Column({ type: 'time with time zone', nullable: false })
    time: Date;

    @ManyToOne(() => Event, (event) => event.id, { lazy: false })
    @JoinColumn({ name: 'event' })
    event: Event;

    @ManyToOne(() => Fighter, (fighter) => fighter.id, { lazy: false })
    @JoinColumn({ name: 'winner' })
    winner: Fighter;

    @Column({ default: 0 })
    state: number;

    @ManyToOne(() => WeightClass, (weight) => weight.id, { lazy: false })
    @JoinColumn({ name: 'weight_class' })
    weight_class: number;
}