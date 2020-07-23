import { Controller, Req, Res, Get, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { StockService } from '@services';

@Controller('stocks')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Get()
  async loadStocks(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const { codes, ids } = req.query;
      if (codes) {
        payload.codes = codes;
      }
      if (ids) {
        payload.ids = ids;
      }
      const response = await this.stockService.loadStocks(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }
}