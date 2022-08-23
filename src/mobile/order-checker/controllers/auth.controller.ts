import { Post, Body, HttpException, Controller, Res, Req, Get } from '@nestjs/common'
import { Response, Request } from 'express'
import { AuthService } from '../services'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() data: any, @Res() res: Response) {
    try {
      const response = await this.authService.loginUser(data)
      res.status(response.status).json(response)
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }

  @Post('verify')
  async verifyUser(@Body() data: any, @Res() res: Response) {
    try {
      const response = await this.authService.verifyUser(data)
      res.status(response.status).json(response)
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }

  @Post('register')
  async register(@Body() data: any, @Res() res: Response) {
    try {
      const response = await this.authService.registerUser(data)
      res.status(response.status).json(response)
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }

  @Get('roles')
  async loadRoles(@Req() req: Request, @Res() res: Response) {
    try {
      const {type} = req.query as any
      let response = {} as any
      if (type) response = await this.authService.loadRoles(type)
      else response = await this.authService.loadRoles('')
      res.status(response.status).json(response)
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }
}