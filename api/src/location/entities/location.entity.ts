import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('locations')
export class Location {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100, nullable: false })
    name: string;
}