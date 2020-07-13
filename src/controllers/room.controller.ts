import { Controller, Req, Res, Get, HttpException, Post, Body, Delete } from '@nestjs/common';
import { Request, Response } from 'express';
import { LocationService } from '@services';

@Controller('rooms')
export class RoomController {
  constructor(private readonly roomService: LocationService) {}

  @Get()
  async loadRooms(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const response = await this.roomService.loadRooms(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Post()
  async createRoom(@Body() room: any, @Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
        body: room,
      };
      const response = await this.roomService.createRoom(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Delete(':id')
  async deleteRoom(@Req() req: Request, @Res() res: Response) {
    try {
      const { id } = req.params;
      const payload = {
        token: req.headers.authorization.split(' ')[1],
        id,
      };
      const response = await this.roomService.deleteRoom(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }
}