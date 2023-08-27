import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, ManyToMany, JoinTable, OneToMany} from "typeorm";
import {Fighter} from "../../fighter/entities/fighter.entity";
import {WeightClass} from "../../weight__class/entities/weight__class.entity";
import {EventFight} from "../../event__fight/entities/event_fight.entity";

@Entity('fights')

export class Fight {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100, nullable: false })
    name: string;

    @ManyToOne(() => Fighter, (fighter) => fighter.id,{ lazy: true })
    @JoinColumn({ name: 'opponent_one' })
    opponent_one: Fighter;

    @ManyToOne(() => Fighter, (fighter) => fighter.id,{ lazy: true })
    @JoinColumn({ name: 'opponent_two' })
    opponent_two: Fighter;

    @Column({ type: 'date', nullable: false })
    date: Date;

    @ManyToOne(() => Fighter, (fighter) => fighter.id, { lazy: true })
    @JoinColumn({ name: 'winner' })
    winner: Fighter;

    @Column({ default: 0 })
    state: number;

    @ManyToOne(() => WeightClass, (weight) => weight.id, { lazy: true })
    @JoinColumn({ name: 'weight_class' })
    weight_class: number;

    // TODO: fix event_fight.entity
    // @OneToMany(() => EventFight, (eventFight) => eventFight.fight, { lazy: true })
    // eventFights: EventFight[];
}