import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthLoginDTO } from './dto/auth-login.dto';
import { AuthService } from './auth.service';
import { User } from './entities/user.entity';
import { AuthRegisterDTO } from './dto/auth-register.dto';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('register')
  register(@Body(new ValidationPipe()) dto: AuthRegisterDTO) {
    return this.service.register(new User(dto));
  }

  @Post('login')
  login(@Body(new ValidationPipe()) dto: AuthLoginDTO) {
    return this.service.login(new User(dto));
  }
}
