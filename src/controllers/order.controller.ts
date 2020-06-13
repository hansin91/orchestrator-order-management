import { Controller, Get, Req, Res, HttpException, Post, Put, Patch } from '@nestjs/common';
import { Request, Response } from 'express';
import { OrderService, QueueService } from '@services';

@Controller('orders')
export class OrderController {
  constructor(
    private readonly queueService: QueueService,
    private readonly orderService: OrderService) {}

  @Post()
  async saveOrder(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      payload.body = req.body;
      const response = await this.queueService.saveOrder(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Patch()
  async printOrders(@Req() req: Request, @Res() res: Response){
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      payload.body = req.body;
      const response = await this.orderService.printOrders(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Put()
  async editOrder(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      payload.body = req.body;
      const response = await this.orderService.editOrder(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Post('bulk')
  async saveBulkOrder(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      payload.body = req.body;
      const response = await this.queueService.saveBulkOrder(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Get()
  async loadOrders(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const { dropshipping, offset, limit, date, start, end, shipping, status, page, shippingId } = req.query;
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
      if (shippingId) {
        payload.shippingId = shippingId;
      }
      if (start) {
        payload.start = start;
      }
      if (end) {
        payload.end = end;
      }
      if (offset) {
        payload.offset = offset;
      }
      if (limit) {
        payload.limit = limit;
      }
      if (dropshipping) {
        payload.dropshipping = dropshipping;
      }
      const response = await this.orderService.loadOrders(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Get('shopee')
  async loadOrderShopee(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const { status, offset, limit } = req.query;
      if (status) {
        payload.status = status;
      }
      if (offset) {
        payload.offset = offset;
      }
      if (limit) {
        payload.limit = limit;
      }
      const response = await this.orderService.loadOrderShopee(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Get('total')
  async loadTotalOrderTotalPage(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const { dropshipping, shipping, status, date, start, end } = req.query;
      if (date) {
        payload.date = date;
      }
      if (start) {
        payload.start = start;
      }
      if (end) {
        payload.end = end;
      }
      if (shipping) {
        payload.shipping = shipping;
      }
      if (status) {
        payload.status = status;
      }
      if (dropshipping) {
        payload.dropshipping = dropshipping;
      }
      const response = await this.orderService.loadTotalOrderTotalPage(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Get('shipping')
  async loadOrderShippings(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const { dropshipping, shipping, status, date, start, end } = req.query;
      if (date) {
        payload.date = date;
      }
      if (start) {
        payload.start = start;
      }
      if (end) {
        payload.end = end;
      }
      if (shipping) {
        payload.shipping = shipping;
      }
      if (status) {
        payload.status = status;
      }
      if (dropshipping) {
        payload.dropshipping = dropshipping;
      }
      const response = await this.orderService.loadOrderShippings(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Get('dropshipping')
  async loadOrderDropshipping(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const { dropshipping, shipping, status, date, start, end } = req.query;
      if (date) {
        payload.date = date;
      }
      if (start) {
        payload.start = start;
      }
      if (end) {
        payload.end = end;
      }
      if (shipping) {
        payload.shipping = shipping;
      }
      if (status) {
        payload.status = status;
      }
      if (dropshipping) {
        payload.dropshipping = dropshipping;
      }
      const response = await this.orderService.loadOrderDropshipping(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Get('status')
  async loadOrderStatus(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const { dropshipping, status, shipping, date, start, end } = req.query;
      if (date) {
        payload.date = date;
      }
      if (start) {
        payload.start = start;
      }
      if (end) {
        payload.end = end;
      }
      if (shipping) {
        payload.shipping = shipping;
      }
      if (status) {
        payload.status = status;
      }
      if (dropshipping) {
        payload.dropshipping = dropshipping;
      }
      const response = await this.orderService.loadOrderStatus(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Get('print')
  async loadPrintedOrders(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const { date, page, isSummary } = req.query;
      if (date) {
        payload.date = date;
      }
      if (page) {
        payload.page = page;
      }
      payload.isSummary = isSummary;
      const response = await this.orderService.loadPrintedOrders(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Get('locked')
  async loadOrderLocked(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const date = req.query.date;
      if (date) {
        payload.date = date;
      }
      const response = await this.orderService.loadOrderLocked(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  @Get('pages')
  async loadOrderPages(@Req() req: Request, @Res() res: Response) {
    try {
      let payload;
      payload = {
        token: req.headers.authorization.split(' ')[1],
      };
      const date = req.query.date;
      if (date) {
        payload.date = date;
      }
      const response = await this.orderService.loadOrderPages(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

}