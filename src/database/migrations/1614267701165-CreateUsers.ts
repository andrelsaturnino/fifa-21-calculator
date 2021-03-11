import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1614267701165 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "players",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "quantidade",
                        type: "varchar",
                    },
                    {
                        name: "valor",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ]
            })
        )
                    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("players");
    }

}
