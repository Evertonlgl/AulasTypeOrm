import { table } from "console";
import { type } from "os";
import { Column, Generated, MigrationInterface, QueryRunner, Table } from "typeorm";
import { uuid } from "uuidv4";

export class createclass1612899170887 implements MigrationInterface {
    
    public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
            name: "class",
            columns: [
                        {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                        },

                        {
                        name: "name",
                        type: "Varchar",
                        },

                        {
                        name: "duration",
                        type: "integer",
                        },

                        {
                        name: "created_At",
                        type: "timestamp",
                        default: "now()",
                        },
                        
                        {
                        name: "updated_At",
                        type: "timestamp",
                        default: "now()",
                        }
                    ]
                                                },)
            

        );
       

                                                               }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("class");
    }

}
