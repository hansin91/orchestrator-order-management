import { Controller, Post, Req, Res, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { OrderService, UploadedFileService } from '@services';

@Controller('uploaded-file')
export class UploadedFileController {
  constructor(
    private readonly orderService: OrderService,
    private readonly uploadedFileService: UploadedFileService) {}

  @Post(':id')
  async uploadFile(@Req() req: Request, @Res() res: Response) {
    try {
      const {id} = req.params;
      const payload = {token: req.headers.authorization.split(' ')[1], id: Number(id), body: ''};
      const response = await this.uploadedFileService.findUploadedFile(payload);
      const file = response.file;
      payload.body = file;
      await this.orderService.processMassOrderDetail(payload);
      res.status(response.status).json(response);
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }
}