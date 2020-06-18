import { Controller, Get, Req, Res, HttpException } from '@nestjs/common';
import { ShippingService } from '@services';
import { Request, Response } from 'express';

@Controller('shippings')
export class ShippingController {
  constructor(private readonly shippingService: ShippingService) {}

  @Get()
  async loadShippings(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
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

  @Get('summary')
  async loadShippingSummary(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const { stores, start, end, dropshipping, date, shipping, status, page } = req.query;
      if (date) {
        payload.date = date;
      }
      if (shipping) {
        payload.shipping = shipping;
      }
      if (status) {
        payload.status = status;
      }
      if (page) {
        payload.page = page;
      }
      if (start) {
        payload.start = start;
      }
      if (end) {
        payload.end = end;
      }
      if (dropshipping) {
        payload.dropshipping = dropshipping;
      }
      if (stores) {
        payload.stores = stores;
      }
      const response = await this.shippingService.loadShippingSummary(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }
}
