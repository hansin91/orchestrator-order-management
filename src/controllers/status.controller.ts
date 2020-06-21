import { Controller, Get, Req, Res, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { StatusService } from '@services';

@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Get()
  async loadStatus(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const { flag } = req.query;
      payload.flag = flag;
      const response = await this.statusService.loadStatus(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Get('summary')
  async loadStatusSummary(@Req() req: Request, @Res() res: Response) {
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
      const response = await this.statusService.loadStatusSummary(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }
}
