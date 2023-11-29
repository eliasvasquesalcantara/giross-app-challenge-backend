import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './auth/entities/user.entity';
import { CepModule } from './cep/cep.module';
import { CEP } from './cep/entities/cep.entity';
import { CEP1701171405663 } from 'migrations/1701171405663-CEP';
import { Start1700861067775 } from 'migrations/1700861067775-Start';
import { Auth1701173916805 } from 'migrations/1701173916805-Auth';

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
      migrations: [Start1700861067775, CEP1701171405663, Auth1701173916805],
      migrationsTableName: 'migrations',
      migrationsRun: true,
    }),
    CepModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
