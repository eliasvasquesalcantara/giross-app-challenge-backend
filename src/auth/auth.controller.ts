import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { AuthLoginDTO } from './dto/auth-login.dto';
import { AuthService } from './auth.service';
import { User } from './entities/user.entity';
import { AuthRegisterDTO } from './dto/auth-register.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('register')
  register(@Body(new ValidationPipe()) dto: AuthRegisterDTO) {
    return this.service.register(new User(dto));
  }

  @Post('login')
  login(@Body(new ValidationPipe()) dto: AuthLoginDTO): Promise<string> {
    return this.service.login(new User(dto));
  }

  @Get('is-token-valid/:token')
  isTokenValid(@Param('token') token: string): Promise<boolean> {
    return this.service.tokenMatchesUser(token);
  }
}
