import { Controller, Post, Body, HttpException, Res, Req } from '@nestjs/common';
import { AuthService } from '@services';
import { ILogin } from '@interfaces';
import { Response, Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() data: ILogin, @Res() res: Response) {
    try {
      const response = await this.authService.login(data);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Post('verify')
  async verify(@Req() req: Request, @Res() res: Response) {
    try {
      const authorization = req.headers.authorization;
      const token = authorization.split(' ')[1];
      const response = await this.authService.verify(token);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }
}
