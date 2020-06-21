import { Controller, Req, Res, Get, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { StoreService } from '@services';

@Controller('stores')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Get('shippings')
  async loadStoreShippings(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const { search, stores, start, end, dropshipping, date, shipping, status, page } = req.query;
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
      if (search) {
        payload.search = search;
      }
      const response = await this.storeService.loadStoreShippings(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }
}