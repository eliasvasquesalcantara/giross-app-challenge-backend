import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './auth/entities/user.entity';
import { CEP1700861067775 } from 'migrations/1700861067775-CEP';
import { CepModule } from './cep/cep.module';
import { CEP } from './cep/entities/cep.entity';

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
      entities: [CEP, User],
      // synchronize: true,
      migrations: [CEP1700861067775],
      migrationsTableName: 'migrations',
      migrationsRun: true,
    }),
    CepModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
