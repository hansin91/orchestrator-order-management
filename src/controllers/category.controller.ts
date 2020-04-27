import { Controller, Post, Body, Res, HttpException, Req } from '@nestjs/common';
import { Response, Request } from 'express';
import { CategoryService } from '@services';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async addCategory(@Body() data: any, @Req() req: Request, @Res() res: Response) {
    try {
      const payload = {
        token: req.headers.authorization.split(' ')[1],
        body: data,
      };
      const response = await this.categoryService.addCategory(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }
}