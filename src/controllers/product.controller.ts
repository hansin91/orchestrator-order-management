import { Controller, Get, Req, Res, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import {  ProductService } from '@services';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('summary')
  async loadProductSummary(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const { stores, date, shipping, status, page } = req.query;
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
      if (stores) {
        payload.stores = stores;
      }
      const response = await this.productService.loadProductSummary(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }
}
