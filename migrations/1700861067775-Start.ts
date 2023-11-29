import { MigrationInterface, QueryRunner } from 'typeorm';

export class Start1700861067775 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"));
        CREATE TABLE "cep" ("id" SERIAL NOT NULL, "numeroCEP" character varying NOT NULL, "UF" character varying NOT NULL, "logradouro" character varying NOT NULL, "bairro" character varying NOT NULL, "cidade" character varying NOT NULL, "latitude" double precision NOT NULL, "longitude" double precision NOT NULL, CONSTRAINT "PK_d0ed0e33814510f6970d23c78b3" PRIMARY KEY ("id"));
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DROP TABLE user;
        DROP TABLE cep;
    `);
  }
}
