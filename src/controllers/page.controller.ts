import { Controller, Patch, Req, Res, HttpException } from '@nestjs/common';
import { PageService } from '@services';
import { Request, Response } from 'express';

@Controller('pages')
export class PageController {
  constructor(private readonly pageService: PageService) {}

  @Patch()
  async lockOrders(@Req() req: Request, @Res() res: Response) {
    try {
      const payload = {token: req.headers.authorization.split(' ')[1], body: req.body};
      const response = await this.pageService.lockDate(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }
}