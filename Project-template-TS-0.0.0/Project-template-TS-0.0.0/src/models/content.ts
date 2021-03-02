import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

//pode referenciar outra tabela do banco entity('class')
@Entity('content')
export default class content {

@PrimaryGeneratedColumn()
id: string;

@Column({
    length:250
})
description: string;

@Column()
linkcontent: string;
    
}
