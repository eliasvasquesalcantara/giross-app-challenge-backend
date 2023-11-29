import { User } from 'src/auth/entities/user.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class Auth1701173916805 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const user = new User({ email: 'email@test.com', password: 'Test@123' });

    queryRunner.query(
      `INSERT INTO "user" (email, password) VALUES ('${user.email}', '${user.password}');`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`TRUNCATE TABLE user`);
  }
}
