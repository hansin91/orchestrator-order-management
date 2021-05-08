import { Controller, Get, Req, Res, HttpException } from '@nestjs/common';
import { ShippingService } from '@services';
import { Request, Response } from 'express';

@Controller('shippings')
export class ShippingController {
  constructor(private readonly shippingService: ShippingService) {}

  @Get()
  async loadShippings(@Req() req: Request, @Res() res: Response) {
    try {
      const payload = { token: req.headers.authorization.split(' ')[1] };
      const response = await this.shippingService.loadShippings(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Get('orders')
  async loadShippingOrders(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const { date, shipping, pages } = req.query;
      if (date) {
        payload.date = date;
      }
      if (shipping) {
        payload.shipping = +shipping;
      }
      if (pages) {
        payload.pages = pages;
      }
      const response = await this.shippingService.loadShippingOrders(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Get('shopee')
  async loadShopeeShippings(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const { testing } = req.query;
      if (testing) {
        payload.testing = testing;
      }
      const response = await this.shippingService.loadShopeeShippings(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }
}
