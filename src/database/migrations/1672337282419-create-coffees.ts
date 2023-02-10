import { MigrationInterface, QueryRunner } from 'typeorm';

export class createCoffees1672337282419 implements MigrationInterface {
  name = 'createCoffees1672337282419';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "coffees" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "user_id" integer, CONSTRAINT "PK_2c43a32ab6534261322aa94a76a" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "coffees" ADD CONSTRAINT "FK_5db326fe4dc6645df9095c8fdca" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffees" DROP CONSTRAINT "FK_5db326fe4dc6645df9095c8fdca"`,
    );
    await queryRunner.query(`DROP TABLE "coffees"`);
  }
}
