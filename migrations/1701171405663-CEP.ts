import { MigrationInterface, QueryRunner } from 'typeorm';

export class CEP1701171405663 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`INSERT INTO cep 
    ("numeroCEP", "UF", "logradouro", "bairro", "cidade", "latitude", "longitude") 
    VALUES 
    ('25635420','RJ','ADELINA BOTELHO BRAZ','ALTO DA SERRA','PETROPOLIS', -22.5112498, -43.1779306),
    ('25635430','RJ','CONSTANTINO CARDOSO','ALTO DA SERRA','PETROPOLIS', -22.5112498, -43.1779306),
    ('25635445','RJ','GERALDA DA SILVA','ALTO DA SERRA','PETROPOLIS', -22.5278012, -43.1783486),
    ('25635483','RJ','MANOEL J. AMOROSO LIMA','ALTO DA SERRA','PETROPOLIS', -22.5505583, -43.1819917),

    ('82315435','PR','FREDERICO MURARO','BUTIATUVINHA','CURITIBA', -25.4289541, -49.2671370),
    ('82315440','PR','WILSON GURTENSTEN','BUTIATUVINHA','CURITIBA', -25.4289541, -49.2671370),
    ('82315444','PR','CONTORNO NORTE DE CURITIBA','BUTIATUVINHA','CURITIBA', -25.3616733, -49.3152211),
    ('82315486','PR','JOSE PAULO DE OLIVEIRA','BUTIATUVINHA','CURITIBA', -25.4289541,-49.2671370),

    ('01003905','SP','RUA JOSE BONIFACIO, 367','SE','SAO PAULO', -23.5488146, -46.6378424),
    ('01003000','SP','JOSE BONIFACIO','SE','SAO PAULO', -23.5489524,-46.6367496),
    ('01002900','SP','VIADUTO DO CHA, 15','CENTRO','SAO PAULO', -23.5472091,-46.6370514),

    ('69092360','AM','MONTE ITAPEVA','NOVA CIDADE','MANAUS', -3.0515238,-59.9660081),
    ('69092380','AM','VALE CEDRON','NOVA CIDADE','MANAUS', -3.1190275,-60.0217314),
    ('69092375','AM','MONTE ELGON','NOVA CIDADE','MANAUS', -3.0036160,-59.9854173),

    ('74491760','GO','OCEANO ATLANTICO','RESIDENCIAL MUNDO NOVO 2','GOIANIA', -16.6621883, -49.4148362),
    ('74491760','GO','PORTO BELO','RESIDENCIAL MUNDO NOVO 2','GOIANIA', -16.6845883, -49.2247494),
    ('74491756','GO','OCEANO PACIFICO','RESIDENCIAL MUNDO NOVO 2','GOIANIA', -16.6629698, -49.4156286);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query('TRUNCATE TABLE CEP;');
  }
}