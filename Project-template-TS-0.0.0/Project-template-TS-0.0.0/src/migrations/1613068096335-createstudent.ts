import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createstudent1613068096335 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"student",
            columns:[{
                name:"id",
                type: "uuid",
                isPrimary: true,
                generationStrategy: "uuid",
                default: "uuid_generate_v4()",

            },
            {
                name:"name",
                type:"Varchar(45)",
                
            },
            {
                name:"Key",
                type:"Varchar(45)",
            }


            ]
        }

        ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("student")
    }

}
