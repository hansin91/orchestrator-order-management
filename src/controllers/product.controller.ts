import { Controller, Get, Req, Res, HttpException, Patch, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import {  ProductService } from '@services';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async loadProducts(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const { group, raw, name, page, limit } = req.query;
      if (name) {
        payload.name = name;
      }
      if (page) {
        payload.page = page;
      }
      if (limit) {
        payload.limit = limit;
      }
      if (raw) {
        payload.raw = raw;
      }
      if (group) {
        payload.group = group;
      }
      const response = await this.productService.loadProducts(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Get('summary')
  async loadProductSummary(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const { search, stores, date, shipping, status, page } = req.query;
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
      if (search) {
        payload.search = search;
      }
      const response = await this.productService.loadProductSummary(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Get('stores')
  async loadProductStores(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const { product_id } = req.query;
      payload.product_id = product_id;
      const response = await this.productService.loadProductStores(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Patch()
  async setProductGroup(@Body() product: any, @Req() req: Request, @Res() res: Response) {
    try {
      const { headers: { authorization } } = req;
      let payload;
      payload = {
        token: authorization.split(' ')[1],
      };
      payload.body = product;
      const response = await this.productService.setProductGroup(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Get(':id')
  async loadProductDetail(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const { id } = req.params;
      payload.id = id;
      const response = await this.productService.loadProduct(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }
}
