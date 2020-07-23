import { Controller, Req, Res, Get, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { PriceService } from '@services';

@Controller('prices')
export class PriceController {
  constructor(private readonly priceService: PriceService) {}

  @Get()
  async loadPrices(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const { codes } = req.query;
      if (codes) {
        payload.codes = codes;
      }
      const response = await this.priceService.loadPrices(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }
}