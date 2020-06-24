import {MigrationInterface, QueryRunner} from "typeorm";

export class init1592948860184 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE users ("id" SERIAL NOT NULL, "firstName" varchar(400), "lastName" varchar(400), "isActive" BOOLEAN NOT NULL)`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
