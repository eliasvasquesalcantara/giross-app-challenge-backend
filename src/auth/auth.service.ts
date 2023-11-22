import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/User';
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
}
