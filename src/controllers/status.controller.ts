import { Controller, Get, Req, Res, HttpException } from '@nestjs/common';
import { StatusService } from '@services';
import { Request, Response } from 'express';

@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Get()
  async loadStatus(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const { flag } = req.query;
      payload.flag = flag;
      const response = await this.statusService.loadStatus(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }
}