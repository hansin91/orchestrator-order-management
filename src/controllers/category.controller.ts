import { Controller, Post, Body, Res, HttpException, Req, Get, Put, Delete } from '@nestjs/common';
import { Response, Request } from 'express';
import { CategoryService } from '@services';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async addCategory(@Body() category: any, @Req() req: Request, @Res() res: Response) {
    try {
      const payload = {token: req.headers.authorization.split(' ')[1], body: category};
      const response = await this.categoryService.addCategory(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Put()
  async saveCategory(@Body() data: any, @Req() req: Request, @Res() res: Response) {
    try {
      const payload = {
        token: req.headers.authorization.split(' ')[1],
        body: data,
      };
      const response = await this.categoryService.saveCategory(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Get('shopee/:id/attributes')
  async loadShopeeCategoryAttributes(@Req() req: Request, @Res() res: Response) {
    try {
      const {id} = req.params;
      const {testing, shopId}  = req.query;
      const payload = { token: req.headers.authorization.split(' ')[1], id, testing } as any;
      if (shopId) {
        payload.shopId = shopId;
      }
      const response = await this.categoryService.loadShopeeCategoryAttributes(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Get('shopee')
  async loadShopeeCategories(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const {testing, shopId} = req.query;
      if (testing) {
        payload.testing = testing;
      }
      if (shopId) {
        payload.shopId = shopId;
      }
      const response = await this.categoryService.loadShopeeCategories(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Get()
  async loadCategories(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const {parent, name, testing} = req.query;
      if (parent) {
        payload.parent = parent;
      }
      if (name) {
        payload.name = name;
      }
      if (testing) {
        payload.testing = testing;
      }
      const response = await this.categoryService.loadCategories(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Get(':id/attributes')
  async loadCategoryAttributes(@Req() req: Request, @Res() res: Response) {
    try {
      const {id} = req.params;
      const {testing}  = req.query;
      const payload = { token: req.headers.authorization.split(' ')[1], id, testing };
      const response = await this.categoryService.loadCategoryAttributes(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Get(':id')
  async loadCategory(@Req() req: Request, @Res() res: Response) {
    try {
      const { id } = req.params;
      const payload = {
        token: req.headers.authorization.split(' ')[1],
        id,
      };
      const response = await this.categoryService.loadCategory(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Delete(':id')
  async deleteCategory(@Req() req: Request, @Res() res: Response) {
    try {
      const { id } = req.params;
      const payload = {
        token: req.headers.authorization.split(' ')[1],
        id,
      };
      const response = await this.categoryService.deleteCategory(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }
}