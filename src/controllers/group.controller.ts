import { Controller, Post, Body, HttpException } from '@nestjs/common';
import { GroupService } from '@services';
import { Request, Response } from 'express';

@Controller('groups')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  async addGroup(@Body() data: any, req: Request, res: Response) {
    try {
      const payload = {
        token: req.headers.authorization.split(' ')[1],
        body: data,
      };
      const response = await this.groupService.addGroup(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }
}