import { Controller, Req, Res, Get, HttpException, Post, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { LocationService } from '@services';

@Controller('warehouses')
export class WarehouseController {
  constructor(private readonly warehouseService: LocationService) {}

  @Get()
  async loadWarehouses(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const response = await this.warehouseService.loadWarehouses(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Post()
  async createWarehouse(@Body() warehouse: any, @Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
        body: warehouse,
      };
      const response = await this.warehouseService.createWarehouse(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }
}