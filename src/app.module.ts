import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './auth/entities/user.entity';
import { CEP } from './CEPs/entities/cep.entity';
import { CEP1700861067775 } from 'migrations/1700861067775-CEP';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'dbuser',
      password: 'dbpassword',
      database: 'dbpostgres',
      entities: [User, CEP],
      migrations: [CEP1700861067775],
      migrationsTableName: 'test',
      migrationsRun: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
