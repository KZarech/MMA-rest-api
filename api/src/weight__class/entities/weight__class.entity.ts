import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity('weight__classes')
export class WeightClass {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100, nullable: false })
    name: string;
}