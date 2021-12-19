import { Controller, Post, Req, Res, HttpException, HttpStatus } from '@nestjs/common'
import { Request, Response } from 'express'
import { UploadProducerService } from '../producers'

@Controller('uploaded-orders')
export class UploadedOrderController {
  constructor(
    private readonly uploadProducerService: UploadProducerService) {}

  @Post()
  async createUploadedOrder(@Req() req: Request, @Res() res: Response) {
    try {
      const payload = {token: req.headers.authorization.split(' ')[1], body: req.body}
      const job = await this.uploadProducerService.sendMessage(payload)
      res.status(HttpStatus.OK).json('completed')
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }
}