import { Controller, Req, Res, Get, HttpException, Post, Body, Delete } from '@nestjs/common';
import { Request, Response } from 'express';
import { LocationService } from '@services';

@Controller('racks')
export class RackController {
  constructor(private readonly rackService: LocationService) {}

  @Get()
  async loadRacks(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const response = await this.rackService.loadRacks(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Post()
  async createRack(@Body() room: any, @Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
        body: room,
      };
      const response = await this.rackService.createRack(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Delete(':id')
  async deleteRack(@Req() req: Request, @Res() res: Response) {
    try {
      const { id } = req.params;
      const payload = {
        token: req.headers.authorization.split(' ')[1],
        id,
      };
      const response = await this.rackService.deleteRack(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }
}