import { Controller, Req, Res, Get, HttpException, Post, Body, Delete } from '@nestjs/common';
import { Request, Response } from 'express';
import { LocationService } from '@services';

@Controller('locations')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get()
  async loadLocations(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const { name, warehouse_id, rack_id, room_id } = req.query;
      if (name) {
        payload.name = name;
      }
      if (warehouse_id) {
        payload.warehouse_id = warehouse_id;
      }
      if (rack_id) {
        payload.rack_id = rack_id;
      }
      if (room_id) {
        payload.room_id = room_id;
      }
      const response = await this.locationService.loadLocations(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Post()
  async createLocation(@Body() location: any, @Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
        body: location,
      };
      const response = await this.locationService.createLocation(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Delete(':id')
  async deleteLocation(@Req() req: Request, @Res() res: Response) {
    try {
      const { id } = req.params;
      const payload = {
        token: req.headers.authorization.split(' ')[1],
        id,
      };
      const response = await this.locationService.deleteLocation(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }
}