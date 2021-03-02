
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createLesson1613066285570 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.createTable(new Table({
                name: "lesson",
                columns: [{
                    name: "idAula",
                    type: "Varchar(100)",
                    isPrimary: true,
                    
                },
                {
                    name: "Description",
                    type: "Varchar",

                },

                ]


            },))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Lesson")
    }

}
