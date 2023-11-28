import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, IsString } from 'class-validator';

export class CepDTO {
  @ApiProperty()
  @IsString()
  CEPNumber: string;

  @ApiProperty()
  @IsString()
  UF: string;

  @ApiProperty()
  @IsString()
  logradouro: string;

  @ApiProperty()
  @IsString()
  bairro: string;

  @ApiProperty()
  @IsString()
  cidade: string;

  @ApiProperty()
  @IsNumberString()
  latitude: number;

  @ApiProperty()
  @IsNumberString()
  longitude: number;
}
