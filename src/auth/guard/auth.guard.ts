import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
} from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly service: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    if (!request.headers.authorization)
      throw new HttpException('Header authorization está vazio', 403);

    const token = this.extractBasicToken(request.headers.authorization);

    if (!token) throw new HttpException('Basic token não fornecido', 403);

    const isTokenValid = await this.service.tokenMatchesUser(token);

    if (!isTokenValid) throw new HttpException('Basic token inválido', 403);

    return isTokenValid;
  }

  extractBasicToken(header: string): string {
    if (header.startsWith('Basic ')) {
      return header.replace('Basic ', '');
    } else return '';
  }
}
