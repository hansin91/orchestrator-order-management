import { Body, Controller, HttpException, Patch, Post, Req, Res } from '@nestjs/common'
import { Response, Request } from 'express'
import { parseToken } from '@helpers'
import { OrderCheckerService, OrderService, StatusService } from '../services'

@Controller()
export class OrderController {

  constructor(
    private orderCheckerService: OrderCheckerService,
    private statusService: StatusService,
    private orderService: OrderService) {}

  @Post('status')
  async findStatus(@Body() data: any, @Req() req: Request, @Res() res: Response) {
    try {
      const token = parseToken(req)
      const payload = {token, body: data}
      const response = await this.statusService.findStatus(payload)
      res.status(response.status).json(response)
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }
  
  @Post()
  async createOrderChecker(@Body() data: any, @Req() req: Request, @Res() res: Response) {
    try {
      const token = parseToken(req)
      const payload = {token, body: data}
      const response = await this.orderCheckerService.createOrderChecker(payload)
      res.status(response.status).json(response)
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }

  @Patch('detail')
  async updateOrderCheckerDetail(@Body() data: any, @Req() req: Request, @Res() res: Response) {
    try {
      const token = parseToken(req)
      const payload = {token, body: data}
      const response = await this.orderCheckerService.updateOrderCheckerDetail(payload)
      res.status(response.status).json(response)
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }

  @Post('scan')
  async scanOrder(@Body() data: any, @Req() req: Request, @Res() res: Response) {
    try {
      const token = parseToken(req)
      const payload = {token, body: data}
      const response = await this.orderService.findOrder(payload)
      res.status(response.status).json(response)
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }

  @Post('search')
  async findOrderCheckers(@Body() data: any, @Req() req: Request, @Res() res: Response) {
    try {
      const token = parseToken(req)
      const payload = {token, body: data}
      const response = await this.orderCheckerService.findOrderCheckers(payload)
      res.status(response.status).json(response)
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }
}