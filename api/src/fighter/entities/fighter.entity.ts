import {Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";
import {WeightClass} from "../../weight__class/entities/weight__class.entity";

@Entity('fighters')
export class Fighter {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100, nullable: false })
    name: string;

    @Column({ length: 50, nullable: true })
    nickname: string;

    @Column({ length: 100, nullable: true })
    nationality: string;

    @Column({ nullable: false })
    birth_date: Date;

    @Column({ nullable: false })
    weight: number;

    @ManyToOne(() => WeightClass,  (weightClass) => weightClass.id, { lazy: false, nullable: false })
    @JoinColumn({name: 'weight_class'})
    weight_class: WeightClass;

    @Column({ default: 0 })
    wins: number;

    @Column({ default: 0 })
    losses: number;

    @Column({ default: 0 })
    knockouts: number;

    @Column({ default: 0 })
    submissions: number;

    @Column({ default: 0 })
    status: number;
}