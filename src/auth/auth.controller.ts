import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { AuthLoginDTO } from './dto/auth-login.dto';
import { AuthService } from './auth.service';
import { User } from './entities/User';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('register')
  register(@Body(new ValidationPipe()) dto: AuthLoginDTO) {
    console.log(`Hello`);
    return this.service.register(new User(dto));
  }
}
