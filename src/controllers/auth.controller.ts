import { Controller, Post, Body, HttpException } from '@nestjs/common';
import { AuthService } from '@services';
import { ILogin } from '@interfaces';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() data: ILogin) {
    try {
      const response = await this.authService.login(data);
      return response;
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }
}
