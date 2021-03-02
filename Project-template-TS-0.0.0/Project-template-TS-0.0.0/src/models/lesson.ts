import {Column, Entity, PrimaryGeneratedColumn}from "typeorm";

@Entity()
export class lesson {
    @PrimaryGeneratedColumn()    
    idaula : string;
    
    @Column()
    description: string
}
