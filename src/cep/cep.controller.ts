import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { CepService } from './cep.service';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { ApiBasicAuth, ApiTags } from '@nestjs/swagger';
import { CepDTO } from './dto/cep.dto';

@ApiTags('CEP')
@Controller('cep')
export class CepController {
  constructor(private readonly service: CepService) {}

  @Post('')
  @UseGuards(AuthGuard)
  @ApiBasicAuth()
  create(@Body() cepDTO: CepDTO) {
    return this.service.create(cepDTO);
  }

  @Get()
  @UseGuards(AuthGuard)
  @ApiBasicAuth()
  findAllInRange(@Query('km') km: string, @Query('cep') CEPNumber: string) {
    return this.service.findAllInRange({
      CEPNumber,
      km,
    });
  }
}
