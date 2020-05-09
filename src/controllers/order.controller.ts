import { Controller, Get, Req, Res, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { OrderService } from '@services';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('shipping')
  async loadOrderShippings(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const date = req.query.date;
      if (date) {
        payload.date = date;
      }
      const response = await this.orderService.loadOrderShippings(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }
}