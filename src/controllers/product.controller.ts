import { Controller, Get, Req, Res, HttpException } from '@nestjs/common';
import {  ProductService } from '@services';
import { Request, Response } from 'express';

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
      const { date, shipping, status, page } = req.query;
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
      const response = await this.productService.loadProductSummary(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }
}
