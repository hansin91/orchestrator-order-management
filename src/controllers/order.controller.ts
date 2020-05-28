import { Controller, Get, Req, Res, HttpException, Post, Put } from '@nestjs/common';
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
      const { date, shipping, status, page, shippingId } = req.query;
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
      const response = await this.orderService.loadOrders(payload);
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
      const date = req.query.date;
      if (date) {
        payload.date = date;
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
      const date = req.query.date;
      if (date) {
        payload.date = date;
      }
      const response = await this.orderService.loadOrderShippings(payload);
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
      const date = req.query.date;
      if (date) {
        payload.date = date;
      }
      const response = await this.orderService.loadOrderStatus(payload);
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

}