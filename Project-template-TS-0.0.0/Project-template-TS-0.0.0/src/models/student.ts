import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class student {

@PrimaryGeneratedColumn('uuid')
id: string;


@Column()
name: string;

@Column({length:45,unique:true
})
key: string;





}
