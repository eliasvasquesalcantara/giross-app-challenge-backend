import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CEP {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  CEPNumber: string;

  @Column()
  UF: string;

  @Column()
  logradouro: string;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  latitude: string;

  @Column()
  longitude: string;
}
