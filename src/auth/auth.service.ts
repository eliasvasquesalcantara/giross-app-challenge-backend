import { HttpException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  register(entity: User) {
    return this.repository.save(entity);
  }

  async login(entity: User) {
    const found = await this.repository.findOne({
      where: { email: entity.email },
    });

    if (found == null) throw new HttpException('User not registered', 500);

    if (entity.email !== found.email || entity.password !== found.password)
      throw new HttpException('Wrong email or password', 500);

    return true;
  }
}
