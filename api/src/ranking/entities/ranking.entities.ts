import {Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Fighter} from "../../fighter/entities/fighter.entity";
import {WeightClass} from "../../weight__class/entities/weight__class.entity";

@Entity('rankings')
export class Ranking {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Fighter, (fighter) => fighter.id, {lazy: true})
    @JoinColumn({name: 'fighter'})
    fighter: Fighter;

    @ManyToOne(() => WeightClass, (weight) => weight.id, {lazy: true})
    @JoinColumn({name: 'weight_class'})
    weight_class: WeightClass;

    @Column({nullable: false})
    rank: number;
}