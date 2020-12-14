import { Controller, Post, Req, Res, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { UploadedOrderService } from '@services';

@Controller('uploaded-orders')
export class UploadedOrderController {
  constructor(private readonly uploadedOrderService: UploadedOrderService) {}

  @Post()
  async createUploadedOrder(@Req() req: Request, @Res() res: Response) {
    try {
      const payload = {
        token: req.headers.authorization.split(' ')[1],
        body: req.body,
      };
      const response = await this.uploadedOrderService.createUploadedOrders(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }
}