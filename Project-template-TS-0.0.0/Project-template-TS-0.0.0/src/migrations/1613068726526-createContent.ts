import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createContent1613068726526 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "content",
            columns:[{
                name:"id",
                type:"Varchar(100)",
                isPrimary:true,
                
            },
            {
                name:"descripition",
                type:"Varchar(250)",

            },
            {
                name:"linkContent",
                type:"Varchar(45)",
            }
        ]

        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("content")
    }

}
