import { Controller, Get, Req, Res, HttpException, Patch, Body, Put, Post } from '@nestjs/common'
import { Request, Response } from 'express'
import { ProductService } from '@services'

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('v2/shopee')
  async loadShopeeV2Products(@Req() req: Request, @Res() res: Response) {
    try {
      const { headers: { authorization } } = req
      const {page, all, status, limit} = req.body
      const param = {page, all, status, limit}
      const payload = {token: authorization.split(' ')[1], body: param}
      const response = await this.productService.loadShopeeV2Products(payload)
      res.status(response.status).json(response)
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }
  
  @Get('unmapped')
  async loadUnmappedProducts(@Req() req: Request, @Res() res: Response) {
    try {
      const {name, limit, page, groupId} = req.query
      const { headers: { authorization } } = req
      const payload = {
        token: authorization.split(' ')[1],
        name: name ? name : '',
        page: page ? page : 1,
        limit,
        groupId: groupId ? groupId : '',
      }
      const response = await this.productService.loadUnmappedProducts(payload)
      res.status(response.status).json(response)
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }

  @Put('stores')
  async editProductStore(@Body() product: any, @Req() req: Request, @Res() res: Response) {
    try {
      const { headers: { authorization } } = req
      const payload = {token: authorization.split(' ')[1], body: product}
      const response = await this.productService.editProductStore(payload)
      res.status(response.status).json(response)
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }

  @Post('stores')
  async createProductStore(@Body() product: any, @Req() req: Request, @Res() res: Response) {
    try {
      const { headers: { authorization } } = req
      const payload = {token: authorization.split(' ')[1], body: product}
      const response = await this.productService.createProductStore(payload)
      res.status(response.status).json(response)
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }

  @Post('mapped')
  async mappingProducts(@Body() body: any, @Req() req: Request, @Res() res: Response) {
    try {
      const { headers: { authorization } } = req
      const payload = {token: authorization.split(' ')[1], body}
      const response = await this.productService.mappingProducts(payload)
      res.status(response.status).json(response)
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }

  @Get()
  async loadProducts(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const { bulk, groups, categories, locations, warehouses, rooms, racks, unassigned, group, id, raw, name, page, limit, ids } = req.query;
      if (name) {
        payload.name = name;
      }
      if (unassigned) {
        payload.unassigned = unassigned;
      }
      if (page) {
        payload.page = page;
      }
      if (limit) {
        payload.limit = limit;
      }
      if (raw) {
        payload.raw = raw;
      }
      if (group) {
        payload.group = group;
      }
      if (id) {
        payload.id = id;
      }
      if (groups) {
        payload.groups = groups;
      }
      if (categories) {
        payload.categories = categories;
      }
      if (locations) {
        payload.locationns = locations;
      }
      if (warehouses) {
        payload.warehouses = warehouses;
      }
      if (rooms) {
        payload.rooms = rooms;
      }
      if (racks) {
        payload.racks = racks;
      }
      if (ids) {
        payload.ids = ids;
      }
      if (bulk) {
        payload.bulk = bulk;
      }
      const response = await this.productService.loadProducts(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Get('summary')
  async loadProductSummary(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const { search, stores, date, shipping, status, page } = req.query;
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
      if (stores) {
        payload.stores = stores;
      }
      if (search) {
        payload.search = search;
      }
      const response = await this.productService.loadProductSummary(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Get('stores')
  async loadProductStores(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const { search, raw, product_id, store_id, product_store_id } = req.query;
      payload.product_id = product_id;
      if (store_id) {
        payload.store_id = store_id;
      }
      if (search) {
        payload.search = search;
      }
      if (raw) {
        payload.raw = raw;
      }
      if (product_store_id) {
        payload.product_store_id = product_store_id;
      }
      const response = await this.productService.loadProductStores(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Patch()
  async setProductGroup(@Body() product: any, @Req() req: Request, @Res() res: Response) {
    try {
      const { headers: { authorization } } = req
      const payload = {token: authorization.split(' ')[1], body: product}
      const response = await this.productService.setProductGroup(payload)
      res.status(response.status).json(response)
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }

  @Get(':id')
  async loadProductDetail(@Req() req: Request, @Res() res: Response) {
    try {
      const { id } = req.params
      const payload = {token: req.headers.authorization.split(' ')[1], id}
      const response = await this.productService.loadProduct(payload)
      res.status(response.status).json(response)
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }
}
