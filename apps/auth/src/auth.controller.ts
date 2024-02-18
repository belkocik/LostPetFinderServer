import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/auth/xd')
  getHello(): string {
    return this.authService.getHello();
  }
}
