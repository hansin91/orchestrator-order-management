import { Controller, Post, Body, HttpException, Get, Req, Res, Next, HttpStatus } from '@nestjs/common';
import { GroupService } from '@services';
import { Request, Response, NextFunction } from 'express';

@Controller('groups')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  async addGroup(@Body() data: any, @Req() req: Request, @Res() res: Response) {
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

  @Get()
  async loadGroups(@Req() req: Request, @Res() res: Response, @Next() next: NextFunction) {
    try {
      const authorization = req.headers.authorization;
      const token = authorization.split(' ')[1];
      const response = await this.groupService.loadGroups(token);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }
}