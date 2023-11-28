import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CEP } from './entities/cep.entity';
import { CepDTO } from './dto/cep.dto';

@Injectable()
export class CepService {
  constructor(
    @InjectRepository(CEP)
    private readonly repository: Repository<CEP>,
  ) {}

  create(CepDTO: CepDTO) {
    return this.repository.save(CepDTO);
  }

  async findAllInRange({ CEPNumber, km }: { CEPNumber: string; km: string }) {
    const CEP = await this.findOneByCEP(CEPNumber);

    const queryResult = await this.repository.query(`
      SELECT cepWithDistance.* FROM (
        SELECT *, (6371 *
          acos(
              cos(radians(${CEP.latitude})) *
              cos(radians(latitude)) *
              cos(radians(${CEP.longitude}) - radians(longitude)) +
              sin(radians(${CEP.latitude})) *
              sin(radians(latitude))
          )) AS distance
        FROM cep
      ) cepWithDistance WHERE cepWithDistance.distance <= ${km};
    `);

    return queryResult;
  }

  async findOneByCEP(CEPNumber: string) {
    const entityFound = await this.repository.findOne({
      where: { CEPNumber },
    });

    if (!entityFound)
      throw new HttpException(
        `Não encontramos o CEP ${CEPNumber} na nossa base de dados `,
        500,
      );

    return entityFound;
  }
}
