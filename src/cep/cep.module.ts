import { Module } from '@nestjs/common';
import { CepController } from './cep.controller';
import { CepService } from './cep.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CEP } from './entities/cep.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([CEP]), AuthModule],
  controllers: [CepController],
  providers: [CepService],
})
export class CepModule {}
