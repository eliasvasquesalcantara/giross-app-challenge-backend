import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CEP {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numeroCEP: string;

  @Column()
  UF: string;

  @Column()
  logradouro: string;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column({
    type: 'float',
  })
  latitude: number;

  @Column({
    type: 'float',
  })
  longitude: number;
}
