import {Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export default class Class {

@PrimaryGeneratedColumn('uuid')    
id: string;

@Column({
length:100,
unique: true,})
name: string;


@Column()
duration: number;


@CreateDateColumn()
createdat: Date;


@CreateDateColumn({nane: "updated_At"})//este atribudo no banco eh mapeado com esse nome/ pode dar pau na inserção se n tiver sido redirecionado
updatedat: Date;

}
